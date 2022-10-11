// * This now becomes a wrapper function for the recursive function
// ? Go over this with someone to make sure you understand it
function countZeroes(arr) {
  let firstZero = findFirst(arr);
  if (firstZero === -1) return 0;
  // ? Are we using the length of the array to find the number of zeroes?
  return arr.length - firstZero;
}

// * Now this function does all the actual work of the algorithm passing in the wrapper array and setting the low and high values as parameters.
// * Low and high are the pointers we establish to keep track of where we are in the array
// ! Important to understand how this is working.
function findFirst(arr, low = 0, high = arr.length - 1) {
  // Checking the upper against the lower
  if (high >= low) {
    // Setting the new middle value.
    let mid = low + Math.floor((high - low) / 2);
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      // Returning the value of the middle. If mid is 0 or -1 and the value of the middle is 0 then return the middle value because we have found the first zero.
      return mid;
    } else if (arr[mid] === 1) {
      // If the value of the middle is 1 then we need to search the right side of the array and we increment the mid value by 1.
      return findFirst(arr, mid + 1, high);
    } else {
      // If the value of the middle is 0 then we need to search the left side of the array and we decrement the mid value by 1.
      return findFirst(arr, low, mid - 1);
    }
  }
  return -1;
}

module.exports = countZeroes;
