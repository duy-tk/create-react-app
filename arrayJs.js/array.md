# Array Object in JavaScripts

## Array.forEach(callback(currentValue [, index [, array]])[, thisArg]);

- the forEach method does not return.
- forEach is only used to loop through the array and perform some processing or logging.
- index - the index of the element which is currently being iterated.
- array - original array which we're looping over.

## Array.map(function callback(currentValue[, index[, array]]) {

Return element for new_array
}[, thisArg])

- map method executes a provided function once for every element in the array and it returns a new transformed array.
- using map helps to avoid creating a separate converted array beforehand for storing the converted elements.
- the map method returns a new array that is of the exact same length as the original array.

## ==> The difference between the forEach and map methods is:

1. forEach is only used for looping and does not return anything back. On the other hand, the map method returns a new array that is of the exact same length as the original array.
2. map does not change the original array but returns a new array.

# Other Array methods

## Array.find(callback(element[, index[, array]])[, thisArg])

- The find method returns the value of the first element in the array.

## Array.findIndex(callback(element[, index[, array]])[, thisArg])

- it returns -1, indicating that no element passed the test.

## Array.filter(callback(element[, index[, array]])[, thisArg])

- The filter method returns a new array with all the elements that satisfy the provided test condition. If no element passes the test condition, an empty array will be returned.

## Array.every(callback(element[, index[, array]])[, thisArg])

- The every method returns true if, for all the elements in the fields array, the callback function returns a true value.
- return false when 1 element false.

## Array.some(callback(element[, index[, array]])[, thisArg]

- The method tests whether at least one element in the array passes the test condition given by the provided function and returns a boolean true or false value.

## Array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

- The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
