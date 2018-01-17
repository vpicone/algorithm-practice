// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowelList = ['a', 'e', 'i', 'o', 'u'];
function vowels(str) {
  let vowelCount = 0;
  str
    .toLowerCase()
    .split('')
    .forEach((ch) => {
      if (vowelList.includes(ch)) {
        vowelCount++;
      }
    });

  return vowelCount;
}

module.exports = vowels;

// function regExvowels(str) {
//   // brackets looking for any characters
//   // g=dont stop, i=insensitive
//   const matches = str.match(/[aeiou]/gi);

//   return matches ? matches.length : 0;
// }
