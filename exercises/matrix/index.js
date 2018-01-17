// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const printMatrix = (matrix) => {
  matrix.forEach((row) => {
    let printRow = '';
    row.forEach((el) => {
      printRow += `_${el}_`;
    });
    console.log((printRow += '|\n'));
  });
  console.log('__________________________________');
};

function matrix(n) {
  const results = [];
  let counter = 1;
  let sCol = 0;
  let sRow = 0;
  let eCol = n - 1;
  let eRow = n - 1;

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  while (sCol <= eCol && sRow <= eRow) {
    debugger;
    for (let currentCol = sCol; currentCol <= eCol; currentCol++) {
      results[sRow][currentCol] = counter;
      counter++;
    }
    sRow += 1;

    for (let currentRow = sRow; currentRow <= eRow; currentRow++) {
      results[currentRow][eCol] = counter;
      counter++;
    }
    eCol -= 1;

    for (let backwardsCurrentCol = eCol; backwardsCurrentCol >= sCol; backwardsCurrentCol--) {
      results[eRow][backwardsCurrentCol] = counter;
      counter++;
    }

    eRow -= 1;

    for (let backwardsCurrentRow = eRow; backwardsCurrentRow >= sRow; backwardsCurrentRow--) {
      results[backwardsCurrentRow][sCol] = counter;
      counter++;
    }

    sCol += 1;
  }

  return results;
}

// m1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// printMatrix(matrix(5));
matrix(4);
module.exports = matrix;

// function matrix(n) {
//     let sRow = 0;
//     let eRow = n - 1;
//     let sCol = 0;
//     let eCol = n - 1;
//     let counter = 1;

//     const results = new Array(n - 1).fill('_');
//     for (let i = 0; i < n; i++) {
//       results[i] = new Array(n).fill('_');
//     }

//     while (sCol <= eCol && sRow <= eRow) {
//       for (let i = sCol; i <= eCol; i++) {
//         results[sRow][i] = counter;
//         counter++;
//       }
//       // console.log(`sCol: ${sCol}, eCol: ${eCol}, sRow:${sRow}, eRow${eRow}`);
//       // printMatrix(results);
//       sRow++;

//       for (let i = sRow; i <= eRow; i++) {
//         results[i][eCol] = counter;
//         counter++;
//       }
//       // console.log(`sCol: ${sCol}, eCol: ${eCol}, sRow:${sRow}, eRow${eRow}`);
//       // printMatrix(results);
//       eCol--;

//       for (let i = eCol; i >= sCol; i--) {
//         results[eRow][i] = counter;
//         counter++;
//       }
//       // console.log(`sCol: ${sCol}, eCol: ${eCol}, sRow:${sRow}, eRow${eRow}`);
//       // printMatrix(results);
//       eRow--;

//       for (let i = eRow; i >= sRow; i--) {
//         results[i][sCol] = counter;
//         counter++;
//       }
//       printMatrix(results);
//       sCol++;
//     }

//     return results;
//   }
