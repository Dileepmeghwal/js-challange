# js-challange

# 1. Linear Search Algorithm

let arr = [1, 2, 3, 4];
let arr1 = [34, 3, 25, 84, 28, 97, 63];

//  using for loop

function searchOne(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(searchOne(arr, 4));
console.log(searchOne(arr1, 97));
console.log(searchOne(arr1, 3));
