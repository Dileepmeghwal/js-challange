/********************************
 * Linear Search Algorithm
 *********************************/

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

/********************************
 * Binary Search Algorithm:
 * ******************************/

// arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, and the target = 23.

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
let score = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(binarySearch(score, 72));

function findLargeNum(arr) {
  let large = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
}
console.log(findLargeNum(score));

//   Binary Search for Searching an Employee ID

function findEmpId(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
const employeeIDs = [101, 203, 345, 567, 890];
const employees = [
  { id: 101, name: "Alice" },
  { id: 203, name: "Bob" },
  { id: 345, name: "Charlie" },
  { id: 567, name: "David" },
  { id: 890, name: "Eve" },
];
console.log(findEmpId(employeeIDs, 567));
console.log(findEmpId(employees, parseInt(101)));

//

function searchInSorted(arr, k) {
  for (const i of arr) {
    if (i === k) {
      return true;
    }
  }
  return false;
}

console.log(searchInSorted([1, 2, 3, 4, 6], 1));

function searchIndex(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i + 1;
    }
  }
  return -1;
}
console.log(searchIndex([9, 7, 16, 16, 4], 16));
console.log(searchIndex([9, 7, 16, 16, 4], 98));

// function binSort(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(binSort([1, 0, 1, 1, 0]));

function getSecondLargest(arr) {
  // Code Here
  arr.sort((a, b) => b - a);
  let first = arr[0];
  let second = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = arr[i];
      return second;
    }
  }
  return -1;
}
console.log(getSecondLargest([9, 7, 16, 26, 4]));

function arraySortedOrNot(arr) {
  let n = arr.length;
  if (n == 1 || n == 0) {
    return true;
  }
  for (let i = 0; i < n; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}
let a = [20, 23, 23, 45, 78, 88];

console.log(arraySortedOrNot(a));

const employeesData = [
  { id: 101, name: "Alice", department: "HR" },
  { id: 203, name: "Bob", department: "IT" },
  { id: 345, name: "Charlie", department: "Finance" },
  { id: 567, name: "David", department: "IT" },
  { id: 890, name: "Eve", department: "Sales" },
];

function sortBydep(arr, target) {
  let s = null;
  for (let i = 0; i < employeesData.length; i++) {
    if (arr[i].id === target) {
      s = arr[i];
      return s;
    }
  }
  return null;
}

console.log(sortBydep(employeesData, 345));

const inputData = [
  {
    _id: "A1",
    itemName: "Item 1",
    machineUsed: "2",
    machineBuild: { type: "Type A", cost: 100 },
  },
  {
    _id: "A2",
    itemName: "Item 2",
    machineUsed: "5",
    machineBuild: { type: "Type B", cost: 200 },
  },
  {
    _id: "A1",
    itemName: "Item 1 Updated",
    machineUsed: "3",
    machineBuild: { type: "Type C", cost: 150 },
  },
];

function reparseData(arr) {
  const obj = {};
  for (const i of arr) {
    if (obj[i._id]) {
      obj[i._id].machineUsed += Number(i.machineUsed) || 0;
      obj[i._id]["machineBuild"].push({
        ...i.machineBuild,
        itemName: i.itemName,
      });
    } else {
      obj[i._id] = {
        ...i,
        machineUsed: Number(i?.machineUsed) || 0,
        machineBuild: [{ ...i.machineBuild, itemName: i?.itemName }],
      };
    }
  }
  return Object.values(obj);
}

console.log(reparseData(inputData));

for (const d of inputData) {
  const o = {};
  if (o[d._id]) {
    o[d.id].machineUsed += d.machineUsed;
  } else {
    o[d._id] = { ...d };
  }
  console.log(o);
}

const data = inputData;
let first = data[2];
let second = data[1];
let third = data[3];
console.log("---------------------------");

console.log(first.itemName);

/****************
 *  Sort a binary array
 * *******************/

// function sortBinary(arr = []) {
//   if (!arr) return;
//   let j = -1;
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i] < 1) {
//       j++;
//       let temp = a[j];
//       a[j] = a[i];
//       a[i] = temp;
//     }
//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
//   }
// }

// let a1 = [1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0];
// console.log(sortBinary(a1));

function findLearShip(arr) {
  let leaders = [];
  let maxFromRight = arr[arr.length - 1];
  leaders.push(maxFromRight);
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] >= maxFromRight) {
      maxFromRight = arr[i];
      leaders.push(arr[i]);
    }
  }
  return leaders.reverse();
}

const arrX = [16, 17, 4, 3, 5, 2];
console.log(findLearShip(arrX));

/****************
 *  Star pattern
 * *******************/

function rightAngleTringle(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`*`.repeat(i));
  }
}
rightAngleTringle(5);

function total(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    console.log(i);

    sum += i;
  }
  return sum;
}
console.log(total(5));

function concatData(arr) {
  let obj = {};
  for (const d of arr) {
    if (obj[d._id]) {
      obj[d._id].machineUsed += Number(d.machineUsed) || 0;
      obj[d._id]["machineBuild"].push({
        ...d.machineBuild,
        itemName: d.itemName,
      });
    } else {
      obj[d._id] = {
        ...d,
        machineUsed: d?.machineUsed,
        machineBuild: [{ ...d.machineBuild, itemName: d.itemName }],
      };
    }
  }

  return obj;
}
const d = [
  {
    _id: "A1",
    itemName: "Item 1",
    machineUsed: 1,
    machineBuild: { type: "Type A", cost: 100 },
  },
  {
    _id: "A2",
    itemName: "Item 2",
    machineUsed: 5,
    machineBuild: { type: "Type B", cost: 200 },
  },
  {
    _id: "A1",
    itemName: "Item 1 Updated",
    machineUsed: 3,
    machineBuild: { type: "Type C", cost: 150 },
  },
];
console.log(concatData(d));

/*********************:
 * Find Duplicates in an Array of Numbers
 * **************************/

function Findduplicates(arr) {
  const obj = {};
  const duplicates = [];

  for (const num of arr) {
    if (obj[num]) {
      obj[num]++;
      if (obj[num] == 2) {
        duplicates.push(num);
      }
    } else {
      obj[num] = 1;
    }
  }
  return duplicates;
}

console.log(Findduplicates([1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 3]));
