'use strict';

require('../src/string-classes.js');

describe('String class tests.', function() {
  describe('hasVowels method', function() {

    it('returns true if the string contains vowel.', function() {
      expect('vEry'.hasVowels()).toBe(true);
      expect('hello78'.hasVowels()).toBe(true);
      expect('_790a'.hasVowels()).toBe(true);
    });

    it('returns false if the string contains no vowel.', function() {
      expect('spy'.hasVowels()).toBe(false);
      expect('3gtb74'.hasVowels()).toBe(false);
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

    it('returns true if the string ends with a \'?\' mark.', function() {
      expect('How are you?'.isQuestion()).toBeTruthy();
      expect('senseless grub question?'.isQuestion()).toBeTruthy();
      expect('1 2 3?'.isQuestion()).toBeTruthy();
    });

    it('returns false if the string does not end with a \'?\' mark.', function() {
      expect('What is going on.'.isQuestion()).toBeFalsy();
      expect('?465 count'.isQuestion()).toBeFalsy();
      expect('465 coun?t'.isQuestion()).toBeFalsy();
    });
  });

  describe('words method', function() {

    it('returns an array of words in the string.', function() {
      let strWord = 'Alice in wonderland again',
        arrWord = ['alice', 'in', 'wonderland', 'again'];
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

    it('returns error if input is not valid.', function() {
      expect('998ks,78'.toCurrency()).toBe('Error\nYou entered an invalid number.');
      expect('(767)849,949'.toCurrency()).toBe('Error\nYou entered an invalid number.');
      expect('!998,49'.toCurrency()).toBe('Error\nYou entered an invalid number.');
    });

    it('returns a currency representation of the number.', function() {
      expect('4748580'.toCurrency()).toBe('4,748,580.00');
      expect('47485.8'.toCurrency()).toBe('47,485.80');
      expect('47485.81'.toCurrency()).toBe('47,485.81');
      expect('47485.8167'.toCurrency()).toBe('47,485.81');
    });
  });

  describe('fromCurrency method', function() {

    it('returns error if input is not valid.', function() {
      expect('99,8k8.78'.fromCurrency()).toBe('Error\nYou entered an invalid number.');
      expect('(767)849,949'.fromCurrency()).toBe('Error\nYou entered an invalid number.');
      expect('#998,49'.fromCurrency()).toBe('Error\nYou entered an invalid number.');
    });

    it('returns a number representation of the currency string.', function() {
      expect('47,485.82'.fromCurrency()).toBe(47485.82);
      expect('956'.fromCurrency()).toBe(956);
    });
  });

  describe('inverseCase method', function() {
    it('should return each letter as an inverse of its current case.', function() {
      expect('Hello world'.inverseCase()).toBe('hELLO WORLD');
      expect('I aM gREAt'.inverseCase()).toBe('i Am GreaT');
    });

    it('should only alter letters. Well, of course.', function() {
      expect('33yrs of Age.'.inverseCase()).toBe('33YRS OF aGE.');
    });
  });

  describe('alternatingCase method', function() {
    it('should return the letters in alternating case.', function() {
      expect('Hello world'.alternatingCase()).toBe('hElLo WoRlD');
      expect('madam am adam'.alternatingCase()).toBe('mAdAm Am AdAm');
    });
  });

  describe('getMiddle method', function() {
    it('should return the character(s) in the middle of the string', function() {
      expect('hello'.getMiddle()).toBe('l');
      expect('hi'.getMiddle()).toBe('hi');
    });

    it('should return blank space if is in the middle.', function() {
      expect('what are you looking for?'.getMiddle()).toBe(' ');
    });
  });

  describe('numberWords method', function() {
    it('should convert figures in a string to words.', function() {
      expect('674'.numberWords()).toBe('six seven four');
      expect('M55 yaba, Lagos.'.numberWords()).toBe('M five five yaba, Lagos.');
    })
  });

  describe('isDigit method', function() {
    it('should return true if string is a single digit.', function() {
      expect('4'.isDigit()).toBeTruthy();
      expect('0'.isDigit()).toBeTruthy();
    });

    it('should return false if string is not a single digit.', function() {
      expect('44'.isDigit()).toBeFalsy();
      expect(''.isDigit()).toBeFalsy();
      expect('4pm'.isDigit()).toBeFalsy();
      expect('-1'.isDigit()).toBeFalsy();
    })
  });

  describe('doubleCheck method', function() {
    it('should return true if a character appears twice in succession', function() {
      expect('Hello world'.doubleCheck()).toBeTruthy();
      expect('hurray'.doubleCheck()).toBeTruthy();
      expect('Bring the beer'.doubleCheck()).toBeTruthy();
      expect('two  spaces'.doubleCheck()).toBeTruthy();
      expect('two ,, special chars'.doubleCheck()).toBeTruthy();
    });

    it('should return false for non successive appearances', function() {
      expect('The end is here'.doubleCheck()).toBeFalsy();
      expect('T'.doubleCheck()).toBeFalsy();
    });
  });
});
