/** product: calculate the product of an array of numbers. */

function product(nums) {
  // use recursion to calculate the product of an array of numbers
  // base case
  if (nums.length === 0) return 1;
  // recursive case
  return nums[0] * product(nums.slice(1));
}

function product(nums, idx = 0) {
  // use recursion to calculate the product of an array of numbers
  // base case
  if (idx === nums.length) return 1;
  // recursive case
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // use recursion to calculate the length of the longest word in an array of words
  // base case
  if (words.length === 0) return 0;
  // recursive case
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // use recursion to return a string with every other letter
  // base case
  if (str.length === 0) return '';
  // recursive case
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // use recursion to check whether a string is a palindrome or not
  // base case
  if (str.length === 0 || str.length === 1) return true;
  // recursive case
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // use recursion to return the index of val in arr (or -1 if val is not present)
  // base case
  if (arr.length === 0) return -1;
  // recursive case
  if (arr[0] === val) return 0;
  let index = findIndex(arr.slice(1), val);
  return index === -1 ? -1 : index + 1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // use recursion to return a copy of a string, but in reverse
  // base case
  if (str.length === 0) return '';
  // recursive case
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // use recursion to return an array of all of the string values in an object
  // base case
  if (Object.keys(obj).length === 0) return [];
  // recursive case
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') arr.push(obj[key]);
    if (typeof obj[key] === 'object') arr.push(...gatherStrings(obj[key]));
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  // use recursion to return the index of val in arr (or -1 if val is not present)
  // base case
  if (arr.length === 0) return -1;
  // recursive case
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearch(arr.slice(0, mid), val);
  let index = binarySearch(arr.slice(mid + 1), val);
  return index === -1 ? -1 : index + mid + 1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
