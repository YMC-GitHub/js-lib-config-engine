export const readyPromise = () => Promise.resolve();

let numbers = '0123456789';
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let specials = '~!@#$%^*()_+-=[]{}|;:,./<>?';

/**
 * Generate random string
 * @param {Number} length the str 's length
 * @param {Object} options the str 's options
 * @return {String} result
 */

export const hasKey = (obj, key) => key in obj;
export const hasVal = (obj, key) => key in obj && obj[key];

export const isStringType = str => typeof str === 'string';
export const randomStr = (length = 8, options = {}) => {
  let chars = '';
  let result = '';
  // case01 chars is consit of numbers , letter and special
  if (options === true) {
    chars = numbers + letters + specials;
  }
  // case02 chars is consit of the str passed
  else if (isStringType(options)) {
    chars = options;
  } else {
    // case03 chars is with numbers
    if (options.numbers !== false) {
      chars += isStringType(options.numbers) ? options.numbers : numbers;
    }
    // case04 chars is with letters
    if (options.letters !== false) {
      chars += isStringType(options.letters) ? options.letters : letters;
    }
    // case05 chars is with specials
    if (options.specials) {
      chars += isStringType(options.specials) ? options.specials : specials;
    }
  }

  while (length > 0) {
    length--;
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};
