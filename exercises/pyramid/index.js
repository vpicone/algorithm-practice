// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '', col = 0) {
  const baseLength = 2 * n - 1;
  const midpoint = Math.floor(baseLength / 2);
  if (row >= n) {
    return;
  }

  if (level.length === baseLength) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }

  let add;
  if (col < midpoint - row || col > midpoint + row) {
    add = ' ';
  } else {
    add = '#';
  }

  pyramid(n, row, level + add, col + 1);
}

module.exports = pyramid;

// function pyramid(n) {
//   const columnLength = 2 * n - 1;
//   const midpoint = Math.floor(columnLength / 2);
//   for (let rowCount = 0; rowCount < n; rowCount += 1) {
//     let row = '';
//     const startIndex = midpoint - rowCount;
//     const endIndex = midpoint + rowCount;
//     for (let col = 0; col < columnLength; col += 1) {
//       if (col < startIndex || col > endIndex) {
//         row += ' ';
//       } else {
//         row += '#';
//       }
//     }
//     console.log(row);
//   }
// }

// recursive(3);

// My solution:
// function pyramid(n) {
//     const column_length = 2 * n - 1;
//     for (let rowCount = 0; rowCount < n; rowCount++) {
//       let row = '';
//       const startIndex = n - rowCount;
//       const endIndex = n + rowCount;
//       debugger;
//       for (let col = 1; col <= column_length; col++) {
//         if (col < startIndex || col > endIndex) {
//           row += ' ';
//         } else {
//           row += '#';
//         }
//       }
//       console.log(row);
//     }
//   }
