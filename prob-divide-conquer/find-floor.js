function findFloor(arr, num, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  if (num >= arr[end]) return arr[end];
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === num) return arr[mid];
  if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
    return arr[mid - 1];
  }
  if (arr[mid] < num) {
    return findFloor(arr, num, mid + 1, end);
  }
  return findFloor(arr, num, start, mid - 1);
}

module.exports = findFloor;
