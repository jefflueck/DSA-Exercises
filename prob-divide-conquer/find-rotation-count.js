// * My code attempt.
// ? Not sure why it is not working.
// function findRotationCount(arr, start = 0, end = arr.length - 1) {
//   if (start < end) return 0;
//   if (start === end) return start;
//   let mid = Math.floor((start + end) / 2);

//   if (mid < end && arr[mid + 1] < arr[mid]) {
//     return mid + 1;
//   }
//   if (mid > start && arr[mid] < arr[mid - 1]) {
//     return mid;
//   }
//   if (arr[end] > arr[mid]) {
//     return findRotationCount(arr, start, mid - 1);
//   }
//   return findRotationCount(arr, mid + 1, end);
// }

// * Solution code.
function findRotationCount(arr, low = 0, high = arr.length - 1) {
  if (high < low) return 0;
  if (high === low) return low;
  let mid = Math.floor((low + high) / 2);

  // Check if element (mid+1) is minimum element.
  // Consider the cases like [3, 4, 5, 1, 2]
  if (mid < high && arr[mid + 1] < arr[mid]) return mid + 1;

  // Check if mid itself is minimum element
  if (mid > low && arr[mid] < arr[mid - 1]) {
    return mid;
  }

  // Decide whether we need to go to left half or
  // right half
  if (arr[high] > arr[mid]) {
    return findRotationCount(arr, low, mid - 1);
  }

  return findRotationCount(arr, mid + 1, high);
}

module.exports = findRotationCount;
