const months = ["January", "February", "March", "April"];

// use method for
const array1 = [];
for (let i = 0; i < months.length; i++) {
  array1.push(months[i]);
}
console.log(array1); //["January", "February", "March","April"]

// use forEach method
months.forEach((month) => {
  console.log(months);
});
// "January"
// "February"
// "March"
// "April

// use map method
const mapList = months.map((month) => month);
console.log(mapList); //["January", "February", "March", "April"]

// Next Section

const employees = [
  { name: "David Carlson", age: 30 },
  { name: "John Cena", age: 34 },
  { name: "Mike Sheridan", age: 25 },
  { name: "John Carte", age: 50 },
];

// use find method
const employee1 = employees.find((employee1) => {
  return employee1.name.indexOf("john") > -1;
});
console.log(employee1);
// {
// "name": "John Cena",
// "age": 34
// }

// use findIndex method
const index = employees.findIndex((employee2) => {
  return employee2.name.indexOf("John") > -1;
});
console.log(index); //1

const employee3 = employees.filter((employee3) => {
  return employee3.name.indexOf("John") > -1;
});
console.log(employee3);
// [
// {
//    "name": "John Cena",
//    "age": 34
// }, // [object Object]
// {
//    "name": "John Carte",
//    "age": 50
// }]

// Next Section

const numbers = [1, 2, 3, 4, 5];
const doubleSum = numbers.reduce((accumulator, number) => {
  return accumulator + number * 2;
}, 10);
console.log(doublesSum);
// 10 + 1*2 = 12
// 12 + 2*2 = 16
// 22
// 30
// 40
