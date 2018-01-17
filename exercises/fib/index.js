// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* Memoization - Store the arguments of each fn call and the result.
If the fn is called again with that result, store it.
*/

function memoize(fn) {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  // fib(0) = 0, fib(1) = 1
  if (n < 2) {
    return n;
  }

  // it's important to use the memoized version in the return
  // These values will call the memoized version once it's assigned.
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;

// function iterativeFib(n) {
//   const fibArray = [0, 1];

//   // Starting at fixed number, incrementing through to a target one at a time
//   // Suggests linear complexity.
//   for (let i = 2; i <= n; i++) {
//     fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
//   }

//   return fibArray[n];
// }
