# AlgoCasts

1. String reverseal

   * Array.from(str).reduce((acc, ch) => ch + acc)

2. Palindrome

   * Reverse string
   * return input === reverse
   * str.split('') is faster than Array.from

3. Reverse Int

   * Coerce to string then reverse.
   * parseInt(n) creates integer up until the non-int '-'
     Coerce back into number and multiply by Math.sign(n)

4. Max char (String map)

   * Generate a character map with frequencies.

   ```javascript
   str.split("").forEach(ch => {
     charMap[ch] = charMap[ch] + 1 || 1;
   });
   ```

   * Use for (let char in charMap) to loop over the object keys
   * update maxCount and maxChar to reflect the frequency and return
     value/answer respectively.

5. Recursion notes

   1. Figure out bare minimum param necessary to represent problem
   2. Give reasonable defaults to the bare minimum
   3. Check the base case, any work left? if not, return.
   4. Do some work, call your func again, make sure arguments have changed.

6. Vowels
   * Create check array. Array lets you have substrings in the future. Better than just one long string.

7) Matrix

   * Ensure the incrementor is the comparator
   * Standard for loop while pushing empty arrays to start
   * use i for looping to prevent misusing variables

8) Runtime complexity

   * How much more processing power is required to run an algo if we double the inputs?
   * Examples:
     * Reverse string: time cost is directly proportional to n (str length)
     * Steps (#): n = 2, 2x2 levels. n=3, 3x3 levels. n^2 complexity

   1. Constant (1) => No matter the input, algo/operation always takes same time. Ex. Capitalizing first letter of a word.
   2. Logarithmic (log(n)) => Doubling the number of elements you are iterating doesn't double the amount of work. **Searching** is log(n).
   3. Linear (n) => Iterating through all elements. If you see a for loop going from 0 to array.length its probably n.
   4. Quasilinear (n\*log(n)) Doubling the number of elements doesn't double the work. **Sorting**
   5. Quadratic (n^2) => Every element in a collection has to be compared to every other element. Handshake problem (new person has to shake everyones hand. Each additional person adds to the length)
   6. Exponential time (2^n) => Adding a single element doubles the amount of work.

9. Run time oddities

   * Even if you only go through half the string, its still linear.
   * If you do a linear algo with two seperate inputs that would be O(n + m) to account for the complexity of both.
   * Nested for loops = n^2 or (n\*n).
   * Nested for loops on different quantities would be n\*m because m could be much larger or much smaller than n.
   * Sorting => O(n\*log(n));
   * Searching after sorted => O(log(n));
   * **Space complexity** refers to the amount of space/memore an algorithim needs. Sameish rules ex. reverse string needs one extra element per ch.

10. Fib/Memoization

    * Programatic solution = linear increases by 1 permutation per additional increase in params.
    * Recursive solution is way worse (exponential time), however you can take advantage of memoization to make it dramatically better.
    * Higher order fn

    ```javascript
    function memoize(fn) {
      const cache = {};
      return (...args) => {
        if (cache[args]) {
          return cache[args];
        } else {
          const result = fn.apply(this, arsg);
          cache[args] = result;
          return result;
        }
      };
    }
    ```

    * You need to use the memoized version and close over the internal cache.

    ```JavaScript
    const fib = (n) => {
      if (n<2) {
        return n;
      }

      return fib(n-1) + fib(n-2);
    }

    fib = memoize(fib);
    ```
