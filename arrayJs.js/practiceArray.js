// Demo methods
const months = ["January", "February", "March", "April"];

// use method for
const array1 = [];
for (let i = 0; i < months.length; i++) {
  array1.push(months[i]);
}
console.log(array1); // Expected Output :["January", "February", "March","April"]

// use forEach method
months.forEach((month) => {
  console.log(months);
});
// Expected Output :
// "January"
// "February"
// "March"
// "April

// use map method
const mapList = months.map((month) => month);
console.log(mapList); // Expected Output :["January", "February", "March", "April"]

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
// Expected Output :
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
// Expected Output :
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
console.log(doublesSum); // // Expected Output :40
// 10 + 1*2 = 12
// 12 + 2*2 = 16
// 22
// 30
// 40



// Exercises

// 1. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

const first =  ((array, n) => {
    if (array == null) 
        return void 0;
    if (n == null) 
        return array[0];
    if (n < 0)
        return [];
    return array.slice(0, n);
});



console.log(first([7, 9, 0, -2])); // Expected Output : 7
console.log(first([],3)); // Expected Output :[]
console.log(first([7, 9, 0, -2],3)); // Expected Output :[7, 9, 0]
console.log(first([7, 9, 0, -2],6)); // Expected Output :[7, 9, 0, -2]
console.log(first([7, 9, 0, -2],-3)); // Expected Output :[]

// 2. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString()); // expect: "Red,Green,White,Black"
console.log(myColor.join() );  // expect: "Red,Green,White,Black"
console.log(myColor.join('+')); // expect: "Red+Green+White+Black"

// 3. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

var num = '025468' ;
var result = [num[0]];
  
for(var x=1; x<num.length; x++)
  {
    if((num[x-1]%2 === 0) && (num[x]%2 === 0))
     {
      result.push('-', num[x]);
     }
    else
     {
      result.push(num[x]);
     }
  }
console.log(result.join('')); // expect: 0-254-6-8

// 4. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(arr1.sort((a, b) => {return a - b})); // expect: -4,-3,1,2,3,5,6,7,8

// 5. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count = 1;
var number = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 number++;
                if (count<number)
                {
                  count=number; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" (" +mf +" times) ") ; // expect: a (5 times)

// 6. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

str = 'The Quick Brown Fox';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join('')); // expect: tHE qUICK bROWN fOX

// 7. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (var i in a) 
{
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}

// expect:
//
// row 0
//  1
//  2
//  1
//  24
// row 1
//  8
//  11
//  9
//  4
// row 2
//  7
//  0
//  7
//  27
// row 3
//  7
//  4
//  28
//  14
// row 4
//  3
//  10
//  26
//  7

// 8. Write a JavaScript function to get random items from an array.

const random_item = ((items) => {
    return items[Math.floor(Math.random()*items.length)];
});

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));


// 8. Write a JavaScript program to find duplicate values in a JavaScript array.
function find_duplicate_in_array(arra1) {
    var object = {};
    var result = [];

    arra1.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;
}

console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6])); //expect: ["4","7"]
