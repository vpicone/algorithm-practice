// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return Array.from(str).reduce((acc, current) => current + acc, '');
}

module.exports = reverse;

// function reverse(str) {
//     let answer = [];

//     Array.from(str).forEach((ch) => {
//       answer = ch + answer;
//     });

//     return answer;
//   }

// function reverse(str) {
//      return Array.from(str)
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//     let answer = [];

//     for (const character of str) {
//         answer = character + answer;
//     }
//     return answer;
//   }
