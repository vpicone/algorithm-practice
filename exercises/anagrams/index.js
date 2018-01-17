// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const cleanString = str =>
  str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort((a, b) => a > b)
    .join('');

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

anagrams('One One', 'One One c');
module.exports = anagrams;

// const cleanCharMap = (str) => {
//     const charMap = {};
//     const cleanString = str.toLowerCase().replace(/[^\w]/g, '');
//     cleanString.split('').forEach((ch) => {
//       charMap[ch] = charMap[ch] + 1 || 1;
//     });
//     return charMap;
//   };

//   function anagrams(stringA, stringB) {
//     const charMapA = cleanCharMap(stringA);
//     const charMapB = cleanCharMap(stringB);

//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//       return false;
//     }

//     for (const char in charMapA) {
//       if (charMapA[char] !== charMapB[char]) {
//         return false;
//       }
//     }

//     return true;
//   }
