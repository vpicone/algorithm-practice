// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  const bArray = arr;
  for (let i = 0; i < bArray.length; i++) {
    for (let j = 0; j < bArray.length - i - 1; j++) {
      if (bArray[j] > bArray[j + 1]) {
        const temp = bArray[j + 1];
        bArray[j + 1] = bArray[j];
        bArray[j] = temp;
      }
    }
  }
  return bArray;
}

function selectionSort(input) {
  const arr = input;
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
      }
    }
    if (arr[i] !== arr[indexOfMin]) {
      // desructuring swap
      [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
  }

  return arr;
}

function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  // no assumptions about order, either left or right will be empty
  // and contribute nothing to the array.
  return [...results, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}
module.exports = {
  bubbleSort,
  selectionSort,
  mergeSort,
  merge,
};
