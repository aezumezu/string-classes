'use strict';

/**
 * hasVowels
 * 
 * checks to see if a string contains a vowel
 * 
 * @return {boolean}
 */
String.prototype.hasVowels = function () {
  return /[aeiou]/i.test(this);
};

/**
 * toUpper
 * 
 * converts string to upper-case
 * 
 * @return {string}
 */
String.prototype.toUpper = function () {
  return this.replace(/[a-z]/g, (match) => {
    return String.fromCharCode(match.charCodeAt() - 32);
  });
};

/**
 * toLower
 * 
 * converts string to lower-case
 * 
 * @return {string}
 */
String.prototype.toLower = function () {
  return this.replace(/[A-Z]/g, (match) => {
    return String.fromCharCode(match.charCodeAt() + 32);
  });
};

/**
 * ucFirst
 * 
 * converts only the first character to upper-case
 * 
 * @return {string}
 */
String.prototype.ucFirst = function () {
  return this[0].toUpper() + this.substring(1);
};

/**
 * isQuestion
 * 
 * checks to see if a string ends with a question mark
 * 
 * @return {boolean}
 */
String.prototype.isQuestion = function () {
  return this.match(/\?$/) ? true : false;
};

/**
 * words
 * 
 * splits a line of text into strings
 * 
 * @return {array}
 */
String.prototype.words = function () {
  return this.toLower().split(/\W/).filter( x => {return x !== '';});
};

/**
 * wordCount
 * 
 * gets the number or words in a string
 * 
 * @return {number}
 */
String.prototype.wordCount = function () {
  return this.words().length;
};

/**
 * toCurrency
 * 
 * converts a string of numbers to currency format
 * 
 * @return {string}
 */
String.prototype.toCurrency = function () {
  let result,
    tempresult;
  if(/^[\d]*(\.\d*)?$/.test(this)) {
    tempresult = this.split('.');
    tempresult[0] = tempresult[0].appendComma();
    if(tempresult[1]) {
      tempresult[1] = tempresult[1].length > 1 ?
        tempresult[1].slice(0, 2) : tempresult[1] + '0';
    } else {
      tempresult[1] = '00';
    }
    result = tempresult.join('.');
  } else {
    result = 'Error\nYou entered an invalid number.';
  }
  return result;
};

/**
 * appendComma
 * 
 * appends comma to a string at a position after 
 * the multiple of three
 * 
 * @return {string}
 */
String.prototype.appendComma = function () {
  let wholePart = this.split('').map((item, index) => {
    if((this.length - (index + 1)) >= 3 &&
      (this.length - (index + 1)) % 3 === 0) {
      item += ',';
    }
    return item;
  }).join('');
  return wholePart;
}

/**
 * fromCurrency
 * 
 * converts a currency string to digits
 * 
 * @return {number}
 */
String.prototype.fromCurrency = function () {
  let num;
  if(/^[{\d,}]*(\.\d{0,2})?$/.test(this)) {
    num = this.replace(/,/g, '');
    return parseFloat(parseFloat(num).toFixed(2));
  }
  return 'Error\nYou entered an invalid number.';
};

/**
 * inverseCase
 * 
 * converts a letter to the inverse of it current case
 * 
 * @return {string}
 */
String.prototype.inverseCase = function () {
  return this.replace(/[a-zA-Z]/g, (match) => {
    return /[a-z]/g.test(match) ? match.toUpper() : match.toLower();
  });
};

/**
 * alternatingCase
 * 
 * alternates the case of letters in a string
 * 
 * @return {string}
 */
String.prototype.alternatingCase = function () {
  let cap = true;
  return this.replace(/[a-zA-Z]/g, (match) => {
    cap = cap ? false : true;
    return cap ? match.toUpper() : match.toLower();
  });
};

/**
 * getMiddle
 * 
 * gets the middle character(s) in a string
 * 
 * @return {string}
 */
String.prototype.getMiddle = function () {
  let result,
    halfLen = parseInt(this.length/2);
  if(this.length % 2) {
    result = this.substr(halfLen, 1);
  } else {
    result = this.substr(halfLen - 1, 2);
  }
  return result;
};

/**
 * numberWords
 * 
 * converts numbers in a string to words
 * 
 * @return {string}
 */
String.prototype.numberWords = function () {
  let numbers = [
        ' zero ',' one ', ' two ',
        ' three ',' four ', ' five ', ' six ',
        ' seven ', ' eight ', ' nine '
      ];

  return this.replace(/[0-9]/g, (match) => {
    return numbers[match];
  })
  .trim().replace(/\s{2}/g, ' ');
};

/**
 * isDigit
 * 
 * confirms if input is a single digit or not
 * 
 * @return {boolean}
 */
String.prototype.isDigit = function () {
  return this.length === 1 && /\d/g.test(this) ? true : false;
};

/**
 * doubleCheck
 * 
 * checks to see if a letters appears twice in succession
 * 
 * @return {boolean}
 */
String.prototype.doubleCheck = function () {
  if(this.length > 1) {
    for(let i = 0, strLen = this.length; i < strLen; i++) {
      if(this.substr(i, 1) === this.substr(i+1, 1)) {
        return true;
      }
    }
  }
  return false;
};
