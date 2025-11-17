/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

/**
 * Creates an array of integers from the specified start to end (inclusive).
 */
function getIntervalArray(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => start + index);
}

/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 */
function sumArrays(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  return Array.from(
    { length: maxLength },
    (_, i) => (arr1[i] || 0) + (arr2[i] || 0)
  );
}

/**
 * Returns an index of the specified element in array or -1 if element is not found.
 */
function findElement(arr, value) {
  return arr.indexOf(value);
}

/**
 * Returns a number of all occurrences of the specified item in an array.
 */
function findAllOccurrences(arr, item) {
  return arr.filter((element) => element === item).length;
}

/**
 * Removes falsy values from the specified array.
 */
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 */
function getStringsLength(arr) {
  return arr.map((str) => str.length);
}

/**
 * Returns the average of all items in the specified array of numbers.
 */
function getAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return Math.round((sum / arr.length) * 100) / 100;
}

/**
 * Checks if all strings in an array have the same length.
 */
function isSameLength(arr) {
  if (arr.length === 0) return true;
  const firstLength = arr[0].length;
  return arr.every((str) => str.length === firstLength);
}

/**
 * Checks if there are elements in the array where the value is equal to its index.
 */
function isValueEqualsIndex(arr) {
  return arr.some((value, index) => value === index);
}

/**
 * Inserts the item into specified array at specified index.
 */
function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

/**
 * Returns the n first items of the specified array.
 */
function getHead(arr, n) {
  return arr.slice(0, n);
}

/**
 * Returns the n last items of the specified array.
 */
function getTail(arr, n) {
  return arr.slice(-n);
}

/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 */
function doubleArray(arr) {
  return arr.concat(arr);
}

/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 */
function toStringList(arr) {
  return arr.join(',');
}

/**
 * Returns array containing only unique values from the specified array.
 */
function distinct(arr) {
  return [...new Set(arr)];
}

/**
 * Creates an n-dimensional array and fills it with zeros.
 */
function createNDimensionalArray(n, size) {
  if (n === 1) return Array(size).fill(0);
  return Array(size)
    .fill(null)
    .map(() => createNDimensionalArray(n - 1, size));
}

/**
 * Flattens a nested array into a single-level array.
 */
function flattenArray(nestedArray) {
  return nestedArray.flat(Infinity);
}

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 */
function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 */
function calculateBalance(arr) {
  return arr.reduce(
    (balance, [income, expense]) => balance + income - expense,
    0
  );
}

/**
 * Breaks an array into chunks of the specified size.
 */
function createChunks(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

/**
 * Generates an array of odd numbers of the specified length.
 */
function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

/**
 * Returns an element from the multidimensional array by the specified indices.
 */
function getElementByIndices(arr, indices) {
  return indices.reduce((current, index) => current[index], arr);
}

/**
 * Returns the number of all falsy values in the specified array.
 */
function getFalsyValuesCount(arr) {
  return arr.filter((value) => !value).length;
}

function getIdentityMatrix(n) {
  return Array.from({ length: n }, (_, rowIndex) =>
    Array.from({ length: n }, (__, colIndex) => (rowIndex === colIndex ? 1 : 0))
  );
}
/**
 * Returns an array containing indices of odd elements in the input array.
 */
function getIndicesOfOddNumbers(numbers) {
  return numbers.reduce((indices, num, index) => {
    if (num % 2 !== 0) indices.push(index);
    return indices;
  }, []);
}

/**
 * Returns the array of RGB Hex strings from the specified array of numbers.
 */
function getHexRGBValues(arr) {
  return arr.map((num) => {
    const hex = num.toString(16).toUpperCase().padStart(6, '0');
    return `#${hex}`;
  });
}

/**
 * Returns the n largest values from the specified array
 */
function getMaxItems(arr, n) {
  return [...arr].sort((a, b) => b - a).slice(0, n);
}

/**
 * Finds and returns an array containing only the common elements found in two arrays.
 */
function findCommonElements(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

/**
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 */
function findLongestIncreasingSubsequence(nums) {
  if (nums.length === 0) return 0;

  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > nums[i - 1]) {
      currentLength += 1;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return maxLength;
}

/**
 * Propagates every item in sequence its position times
 */
function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

/**
 * Shifts an array by n positions.
 */
function shiftArray(arr, n) {
  if (arr.length === 0) return arr;

  const shift = n % arr.length;
  if (shift === 0) return arr;

  if (shift > 0) {
    return [...arr.slice(-shift), ...arr.slice(0, -shift)];
  }
  return [...arr.slice(-shift), ...arr.slice(0, -shift)];
}

/**
 * Sorts digit names.
 */
function sortDigitNamesByNumericOrder(arr) {
  const digitMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return [...arr].sort((a, b) => digitMap[a] - digitMap[b]);
}

/**
 * Swaps the head and tail of the specified array.
 */
function swapHeadAndTail(arr) {
  const middle = Math.floor(arr.length / 2);
  const head = arr.slice(0, middle);
  const tail = arr.slice(-middle);
  const mid = arr.length % 2 === 1 ? [arr[middle]] : [];

  return [...tail, ...mid, ...head];
}
module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
