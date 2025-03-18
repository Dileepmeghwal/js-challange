// const arrary = [
//   { id: 1, category: "A", value: "Nikunj" },
//   { id: 2, category: "B", value: "Yash" },
//   { id: 3, category: "A", value: "Dhruv" },
//   { id: 4, category: "B", value: "Arati" },
// ];

const arr = [
  { cat: "fruit", name: "apple" },
  { cat: "veg", name: "carrot" },
  { cat: "fruit", name: "banana" },
];
const arr1 = [
  { cat: "fruit", names: ["apple", "banana"] },
  { cat: "veg", name: "carrot" },
];

const grouped = [];
const groups = {};

for (const obj of arr) {
  if (!groups[obj.cat]) {
    groups[obj.cat] = [];
    grouped.push(groups[obj.cat]);
  }
  groups[obj.cat].push(obj);
}
// console.log(groups);

function groupBycat(arr) {
  const obj = {};
  for (const num of arr) {
    if (!obj[num.cat]) {
      obj[num.cat] = { cat: num.cat, names: [] };
    }
    obj[num.cat].names.push(num.name);
  }

  return Object.values(obj);
}
console.log(groupBycat(arr));

const list = groupBycat(arr).map((f) => ({
  h1: f.cat,
  name: f.names,
}));
list;

const arrary = [
  { id: 1, category: "A", value: "Nikunj" },
  { id: 2, category: "B", value: "Yash" },
  { id: 3, category: "A", value: "Dhruv" },
  { id: 4, category: "B", value: "Arati" },
  { id: 5, category: "C", value: "Govind" },
];

function groupByCategory(arr) {
  const obj = {};
  for (const item of arr) {
    if (!obj[item.category]) {
      obj[item.category] = { cat: item.category, value: [] };
    }
    obj[item.category].value.push(item.value);
  }
  return Object.values(obj);
}
console.log(groupByCategory(arrary));

const data = [
  { city: "New York", state: "NY", population: 100000 },
  { city: "San Francisco", state: "CA", population: 50000 },
  { city: "Los Angeles", state: "CA", population: 200000 },
  { city: "San Diego", state: "CA", population: 10000 },
  { city: "Chicago", state: "IL", population: 150000 },
  { city: "Miami", state: "FL", population: 5000 },
];

function groupByCity(arr) {
  const obj = {};
  for (const item of arr) {
    if (obj[item.state]) {
      obj[item.state].population += item.population;
    } else {
      obj[item.state] = { ...item };
    }
  }
  return Object.values(obj);
}

console.log(groupByCity(data));
