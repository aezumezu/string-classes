'use strict';

/**
 * hasVowels
 * 
 * checks to see if a string contains a vowel
 * 
 * @return {boolean}
 */
String.prototype.hasVowels = function() {
  return /[aeiou]/i.test(this);
};

/**
 * toUpper
 * 
 * converts string to upper-case
 * 
 * @return {string}
 */
String.prototype.toUpper = function() {
  let str = this;
  function upper(match) {
    return String.fromCharCode(match.charCodeAt() - 32);
  }
  return str.replace(/[a-z]/g, upper);
};

/**
 * toLower
 * 
 * converts string to lower-case
 * 
 * @return {string}
 */
String.prototype.toLower = function() {
  let str = this;
  function lower(match) {
    return String.fromCharCode(match.charCodeAt() + 32);
  }
  return str.replace(/[A-Z]/g, lower);
};

/**
 * ucFirst
 * 
 * converts only the first character to upper-case
 * 
 * @return {string}
 */
String.prototype.ucFirst = function() {
  return this.substring(0,1).toUpper() + this.substring(1);
};

/**
 * isQuestion
 * 
 * checks to see if a string ends with a question mark
 * 
 * @return {boolean}
 */
String.prototype.isQuestion = function() {
  return this.match(/\?$/) ? true : false;
};

/**
 * words
 * 
 * splits a line of text into strings
 * 
 * @return {array}
 */
String.prototype.words = function() {
  return this.toLower().split(/\W/).filter( x => {return x !== '';});
};

/**
 * wordCount
 * 
 * gets the number or words in a string
 * 
 * @return {number}
 */
String.prototype.wordCount = function() {
  return this.words().length;
};

/**
 * toCurrency
 * 
 * converts a string of numbers to currency format
 * 
 * @return {string}
 */
String.prototype.toCurrency = function() {
  let result,
    wholePart,
    tempresult;
  if(/^[\d]*(\.\d*)?$/.test(this)) {
    tempresult = this.split('.');
    wholePart = tempresult[0].split('').map((item, index) => {
      if((tempresult[0].length - (index + 1)) >= 3 &&
         (tempresult[0].length - (index + 1)) % 3 === 0) {
        item += ',';
      }
      return item;
    }).join('');
    tempresult[0] = wholePart;
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
 * fromCurrency
 * 
 * converts a currency string to digits
 * 
 * @return {number}
 */
String.prototype.fromCurrency = function() {
  let result, num;
  if(/^[{\d,}]*(\.\d{0,2})?$/.test(this)) {
    num = this.replace(/,/g, '');
    result = parseFloat(parseFloat(num).toFixed(2));
  } else {
    result = 'Error\nYou entered an invalid number.';
  }
  return result;
};

/**
 * inverseCase
 * 
 * converts a letter to the inverse of it current case
 * 
 * @return {string}
 */
String.prototype.inverseCase = function() {
  function reverse(match) {
    return /[a-z]/g.test(match) ? match.toUpper() : match.toLower();
  }
  return this.replace(/[a-zA-Z]/g, reverse);
};

/**
 * alternatingCase
 * 
 * alternates the case of letters in a string
 * 
 * @return {string}
 */
String.prototype.alternatingCase = function() {
  let cap = true;
  function alternate(match) {
    cap = cap ? false : true;
    return cap ? match.toUpper() : match.toLower();
  }
  return this.replace(/[a-zA-Z]/g, alternate);
};

/**
 * getMiddle
 * 
 * gets the middle character(s) in a string
 * 
 * @return {string}
 */
String.prototype.getMiddle = function() {
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
String.prototype.numberWords = function() {
  let result,
    numbers = [' zero ', ' one ', ' two ', ' three ',
    ' four ', ' five ', ' six ', ' seven ', ' eight ', ' nine ', ' ten '];

  function figure2word(match) {
    return numbers[match];
  }

  result = this.replace(/[0-9]/g, figure2word);
  return (result.trim()).replace(/\s{2}/g, ' ');
};

/**
 * isDigit
 * 
 * confirms if input is a single digit or not
 * 
 * @return {boolean}
 */
String.prototype.isDigit = function() {
  return this.length === 1 && /\d/g.test(this) ? true : false;
};

/**
 * doubleCheck
 * 
 * checks to see if a letters appears twice in succession
 * 
 * @return {boolean}
 */
String.prototype.doubleCheck = function() {
  if(this.length < 2) {
    return false;
  }

  for(let i = 0, strLen = this.length; i < strLen; i++) {
    if(this.substr(i, 1) === this.substr(i+1, 1)) {
      return true;
    }
  }
  return false;
};
