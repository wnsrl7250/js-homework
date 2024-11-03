function getNumberAtArray(arr, index) {
  if (index > 0 && index < arr.length) {
    return arr[index];
  } else {
    console.error("index값이 범위를 벗어납니다.");
    return;
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
