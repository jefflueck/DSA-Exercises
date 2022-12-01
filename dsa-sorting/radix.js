// function radixSort(arr) {
// * My code here *
// let max = Math.max(...arr);
// let count = 0;
// while (max > 0) {
//   max = Math.floor(max / 10);
//   count++;
// }
// for (let i = 0; i < count; i++) {
//   let buckets = Array.from({ length: 10 }, () => []);
//   for (let j = 0; j < arr.length; j++) {
//     let digit = Math.floor(arr[j] / Math.pow(10, i)) % 10;
//     buckets[digit].push(arr[j]);
//   }
//   arr = [].concat(...buckets);
// }
// return arr;
// }

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

let maxNum = getDigit(12345, 0);
console.log(
  `Helper function getDigit returns ${maxNum} for the number 12345 starting from the index 0 telling us that the last digits value is 5`
);

let mostNum = mostDigits([1234, 56, 7]);
console.log(
  `Helper function mostDigits returns ${mostNum} for the array [1234, 56, 7] telling us that the number with the most digits is 1234`
);

let digCount = digitCount(12345);
console.log(
  `Helper function digitCount returns ${digCount} for the number 12345 telling us the number of digits in the number`
);

let result = radixSort([23, 345, 5467, 12, 2345, 9852]);
console.log(`The result of the radixSort function is ${result}`);

module.exports = { getDigit, digitCount, mostDigits, radixSort };

// module.exports = radixSort;
