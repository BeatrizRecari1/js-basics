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