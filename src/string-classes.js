'use strict';

String.prototype.hasVowels = function() {
  return /[aeiou]/i.test(this);
};

String.prototype.toUpper = function() {
  let str = this;
  function upper(match) {
    return String.fromCharCode(match.charCodeAt() - 32);
  }
  return str.replace(/[a-z]/g, upper);
};

String.prototype.toLower = function() {
  let str = this;
  function lower(match) {
    return String.fromCharCode(match.charCodeAt() + 32);
  }
  return str.replace(/[A-Z]/g, lower);
};

String.prototype.ucFirst = function() {
  return this.substring(0,1).toUpper() + this.substring(1);
};

String.prototype.isQuestion = function() {
  return this.match(/\?$/) ? true : false;
};

String.prototype.words = function() {
  return this.toLower().split(/\W/).filter( x => {return x !== '';});
};

String.prototype.wordCount = function() {
  return this.words().length;
};

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
