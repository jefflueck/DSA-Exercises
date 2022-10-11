// * My attempt at solving this problem
// function findRotatedIndex(arr, val) {
//   let start = checkLeft(arr, val);
//   if (start === -1) return start;
//   let end = checkRight(arr, val);
//   return end - start + 1;
// }

// function checkLeft(arr, val, start = 0, end = arr.length - 1) {
//   if (start > end) return -1;
//   let mid = Math.floor((start + end) / 2);
//   if (arr[mid] === val && (mid === 0 || arr[mid - 1] < val)) return mid;
//   if (arr[mid] >= val) return checkLeft(arr, val, start, mid - 1);
//   return checkLeft(arr, val, mid + 1, end);
// }

// function checkRight(arr, val, start = 0, end = arr.length - 1) {
//   if (start > end) return -1;
//   let mid = Math.floor((start + end) / 2);
//   if (arr[mid] === val && (mid === arr.length - 1 || arr[mid + 1] > val))
//     return mid;
//   if (arr[mid] > val) return checkRight(arr, val, start, mid - 1);
//   return checkRight(arr, val, mid + 1, end);
// }

// * Solution code. Changed all vars to let.
// ? Get help with understanding how this is working.
function findRotatedIndex(array, num) {
  let pivot = findPivot(array);
  if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
    return binarySearch(array, num, 0, pivot - 1);
  } else {
    return binarySearch(array, num, pivot, array.length - 1);
  }
}

function binarySearch(array, num, start, end) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (num < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    else if (arr[start] <= arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

module.exports = findRotatedIndex;
