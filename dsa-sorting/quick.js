/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr) {
  let pivot = arr[0];
  let swapIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[0], arr[swapIdx]] = [arr[swapIdx], arr[0]];
  return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivotIdx = pivot(arr);
  let left = quickSort(arr.slice(0, pivotIdx));
  let right = quickSort(arr.slice(pivotIdx + 1));
  return [...left, arr[pivotIdx], ...right];
}

let pivotIdx = pivot([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(
  `The pivot helper function returns the pivot value of ${pivotIdx} for the array [4, 8, 2, 1, 5, 7, 6, 3]`
);

let quickSortArr = quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(
  `The quickSort function returns the sorted array of ${quickSortArr} for the array [4, 8, 2, 1, 5, 7, 6, 3] by using the returned pivot value of ${pivotIdx} as its starting point to sort the array left of the pivot value ${pivotIdx} and right of the pivot value ${pivotIdx}`
);
module.exports = { quickSort, pivot };
