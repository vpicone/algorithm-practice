// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let answer = null;

  str.split('').forEach((ch) => {
    charMap[ch] = charMap[ch] + 1 || 1;
  });

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      answer = char;
    }
  }

  return answer;
}

module.exports = maxChar;
