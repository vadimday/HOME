const arr1 = [2200, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];
function findMinValue(arr) {
  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
}

const min1 = findMinValue(arr1);
const min2 = findMinValue(arr2);
const min3 = findMinValue(arr3);

console.log("Мінімальні значення:");
console.log("arr1:", min1);
console.log("arr2:", min2);
console.log("arr3:", min3);
