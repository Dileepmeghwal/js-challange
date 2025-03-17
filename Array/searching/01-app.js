// Linear Search Algorithm

// Input: arr[] = [1, 2, 3, 4], x = 3
// Output: 2

function search(arr, target) {
  let index = 0;
  for (const i of arr) {
    if (i === target) {
      return index;
    }
    index++;
  }
  return -1;
}
let arr = [1, 2, 3, 4];
let arr1 = [34, 3, 25, 84, 28, 97, 63];

console.log(search(arr, 4));
console.log(search(arr1, 97));

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
