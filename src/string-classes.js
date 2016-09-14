String.prototype.hasVowels = function() {
  'use strict';
  return /[aeiou]/i.test(this);
};

String.prototype.toUpper = function() {
  'use strict';
  let str = this.split('');
  str = str.map( item => {
    let result = item;
    if(item.charCodeAt() > 96 && item.charCodeAt() < 123) {
      result = String.fromCharCode(item.charCodeAt() - 32);
    }
    return result;
  });
  return str.join('');
};

String.prototype.toLower = function() {
  'use strict';
  let str = this.split('');
  str = str.map( item => {
    let result = item;
    if(item.charCodeAt() > 64 && item.charCodeAt() < 91) {
      result = String.fromCharCode(item.charCodeAt() + 32);
    }
    return result;
  });
  return str.join('');
};

String.prototype.ucFirst = function() {
  'use strict';
  return this.substring(0,1).toUpper() + this.substring(1);
};

String.prototype.isQuestion = function() {
  'use strict';
  return this.match(/\?$/) ? true : false;
};

String.prototype.words = function() {
  'use strict';
  return this.toLower().split(/\W/).filter( x => {return x !== '';});
};

String.prototype.wordCount = function() {
  'use strict';
  return this.words().length;
};

String.prototype.toCurrency = function() {
  'use strict';
  let samelength = (parseFloat(this)).toString().length === this.length,
      result,
      wholePart,
      tempresult;
  if(!isNaN(parseFloat(this)) && samelength) {
    tempresult = parseFloat(this).toFixed(2).split('.');
    wholePart = tempresult[0].split('').map((item, index) => {
      if((tempresult[0].length - (index + 1)) >= 3 && (tempresult[0].length - (index + 1)) % 3 === 0) {
        item += ',';
      }
      return item;
    }).join('');
    tempresult[0] = wholePart;
    result = tempresult.join('.');
  } else {
    result = 'Error\nYou entered an invalid number.';
  }
  return result;
};

String.prototype.fromCurrency = function() {
  'use strict';
  let result,
      num = this.replace(/,/g, ''),
      isNum = !isNaN(parseFloat(num)),
      samelength = num.length === (parseFloat(num)).toString().length;
  if( isNum && samelength) {
    result = parseFloat(parseFloat(num).toFixed(2));
  } else {
    result = 'Error\nYou entered an invalid number.';
  }
  return result;
}
