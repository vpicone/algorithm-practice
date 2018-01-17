// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reverse = Array.from(str).reduce((rev, ch) => ch + rev);
  return str === reverse;
}

module.exports = palindrome;

// function palindrome(str) {
//   const reverse = Array.from(str).reduce((rev, ch) => ch + rev);
//   return str === reverse;
// }

// function palindrome(str) {
//   return str.split('').every((char, i) => char === str[str.length - i - 1]);
// }
