// Given an array of numbers, write a function to return the sum

function calculateSum(arr) {
    let sum = arr[0]
    let index = 1 // Not starting at 0 only because we got that one above
    if(index < arr.lenght) {
        sum = sum + arr[index]
        index++
        // Somehow we need to jump to if statement
    }
    return sum
}

const myArray = [23, 74. 18, 42, 69, 91, 88]

const mySum = calculateSum(myArray)

console.log(mySum)

// Rewrite the previous code with a loop function

function calculateSum(arr) {
    let sum = arr[0];

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

console.log(calculateSum(arr))

function addListOfNums(list) {
    // Let's start with the first number of the array
    let sum = list[0]
    // Loop through the array as long as we still have numbers...
    for(let i = 1; i < list.length; i++) {
        // ... Add the next number
        sum = sum + list[i]
    }
    // Finally, return the sum
}

