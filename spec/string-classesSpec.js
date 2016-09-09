const APP = require('../src/string-classes.js');

describe('String class tests.', function() {
  'use strict';
  describe('hasVowel method', function() {

    it('returns true if the string contains vowel.', function() {
      expect('very'.hasVowel()).toBe(true);
      expect('hello78'.hasVowel()).toBe(true);
      expect('_790a'.hasVowel()).toBe(true);
    });

    it('returns false if the string contains no vowel.', function() {
      expect('spy'.hasVowel()).toBe(false);
      expect('3gtb74'.hasVowel()).toBe(false);
    });

    it('throws an error if input is not a string.', function() {
      let num = 45, trueOrFalse = false;
      expect(num.hasVowel()).toThrow();
      expect(trueOrFalse.hasVowel).toThrow();
    });
  });

  describe('toUpper method', function() {

    it('returns the upper case equivalent of a given string.', function() {
      expect('TODAY'.toUpper()).toBe('TODAY');
      expect('toDay'.toUpper()).toBe('TODAY');
      expect('today'.toUpper()).toBe('TODAY');
      expect('TODAy'.toUpper()).toBe('TODAY');
    });

    it('returns uppercase string where applicable.', function() {
      expect('com3'.toUpper()).toBe('COM3');
      expect('#55 molEYE, yaba.'.toUpper()).toBe('#55 MOLEYE, YABA.');
    });
  });

  describe('toLower method', function() {

    it('returns the lower case equivalent of a string.', function() {
      expect('TOLLgatE'.toLower()).toBe('tollgate');
      expect('tooMuch'.toLower()).toBe('toomuch');
    });

    it('returns lower case string where applicable.', function() {
      expect('3 X 4 is NOT = 15'.toLower()).toBe('3 x 4 is not = 15');
    });
  });

  describe('ucFirst method', function() {

    it('converts the first character of a string to upper case.', function(){
      expect('bear'.ucFirst()).toBe('Bear');
      expect('hello world'.ucFirst()).toBe('Hello world');
    });

    it('returns a string as is if the first letter is upper  case.', function() {
      expect('Hello'.ucFirst()).toBe('Hello');
    });

    it('returns the string as is if first character is not a letter.', function() {
      expect('3rd expression'.ucFirst()).toBe('3rd expression');
    });
  });

  describe('isQuestion method', function() {

    it('returns true is the string ends with a \'?\' mark.', function() {
      expect('How are you?'.isQuestion()).toBeTruthy();
      expect('senseless grub question'.isQuestion()).toBeTruthy();
    });

    it('returns false if the string does not end with a \'?\' mark.', function() {
      expect('What is going on.'.isQuestion()).toBeFalsy();
    });
  });

  describe('words method', function() {

    it('returns an array of words in the string.', function() {
      let strWord = 'Alice in wonderland again',
          arrWord = ['alice', 'in', 'wonderland', 'again'];
      expect(strWord.words()).toEqual(arrWord);
    });

    it('retain concatenating characters.', function() {
      let strWord = 'St. Paul\'s Co-operation Int\'l.',
          arrWord = ['st', 'paul\'s', 'co-operation', 'int\'l'];
      expect(strWord.words()).toEqual(arrWord);
    });

    it('remove punctuation or unnecessary characters.', function() {
      let strWord = 'In the wardrobe(closet), besides your jacket)?',
          arrWord = ['in', 'the', 'wardrobe', 'closet', 'besides', 'your', 'jacket'];
      expect(strWord.words()).toEqual(arrWord);
    });
  });

  describe('wordCount method', function() {

    it('counts the words in a string and returns the number.', function() {
      let strWord = 'A return to innocence.';
      expect(strWord.wordCount()).toEqual(4);
    });
  });

  describe('toCurrency method', function() {

    it('throws error if input is not valid.', function() {
      expect('998ks,78'.toCurrency()).toThrow();
      expect('(767)849,949'.toCurrency()).toThrow();
      expect('#998,49'.toCurrency()).toThrow();
    });

    it('returns a currency representation of the number.', function() {
      expect('4748580').toBe('4,748,580.00');
      expect('47485.8').toBe('47,485.80');
      expect('47485.81').toBe('47,485.81');
      expect('47485.8167').toBe('47,485.82'); //is roundup necessary, or do we trim?
    });
  });

  describe('fromCurrency method', function() {

    it('throws error if input is not valid.', function() {
      expect('99,8k8.78'.toCurrency()).toThrow();
      expect('(767)849,949'.toCurrency()).toThrow();
      expect('#998,49'.toCurrency()).toThrow();
    });

    it('returns a number representation of the currency string.', function() {
      expect('47,485.82'.fromCurrency()).toBe(47485.82);
      expect('956'.fromCurrency()).toBe(956.00);
    });
  });
});
