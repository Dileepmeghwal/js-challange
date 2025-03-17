# js-challange

# 1. Linear Search Algorithm

let arr = [1, 2, 3, 4];
let arr1 = [34, 3, 25, 84, 28, 97, 63];

// using for loop

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

<!-- Iterative Binary Search Algorithm: -->

# 2. Iterative Binary Search Algorithm:

<!-- Binary search is extremely useful in ERP projects where quick searching in sorted data is required, such as: ✅ Searching employees, invoices, or stock items.
✅ Optimizing search suggestions and pagination.
✅ Enhancing performance in large-scale enterprise applications. -->
