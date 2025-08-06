//exercise 1:
const findFactorial = function(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * findFactorial(n - 1);
}

//exercise 2:
const reverseString = function(str) {
  if (str === "") {
    return "";
  }

  return reverseString(str.slice(1)) + str[0];
}

//exercise 3:
const swap = function(arr1, arr2) {
  if (arr1.length === 0) return;

  const element = arr1.shift();
  arr2.push(element);
  swap(arr1, arr2);
}


