function sortedFrequency(arr, num) {
  let start = findFirst(arr, num);
  if (start === -1) return start;
  let end = findLast(arr, num);
  return end - start + 1;
}

function findFirst(arr, num, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === num && (mid === 0 || arr[mid - 1] < num)) return mid;
  if (arr[mid] >= num) return findFirst(arr, num, start, mid - 1);
  return findFirst(arr, num, mid + 1, end);
}

function findLast(arr, num, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === num && (mid === arr.length - 1 || arr[mid + 1] > num))
    return mid;
  if (arr[mid] > num) return findLast(arr, num, start, mid - 1);
  return findLast(arr, num, mid + 1, end);
}

module.exports = sortedFrequency;
