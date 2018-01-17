// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // Can flatten array with ...rest
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}

chunk([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]], 5);

module.exports = chunk;

// function chunk(array, size) {
//     const chunks = [];
//     array.forEach((element) => {
//       // Get the last chunk.
//       const last = chunks[chunks.length - 1];

//       // If there is no last chunk, or the last chunk is full...
//       if (!last || last.length === size) {
//         // create a new chunk with this element and add it
//         chunks.push([element]);
//       } else {
//         // add this element to the previous chunk
//         last.push(element);
//       }
//     });

//     return chunks;
//   }
