// Homework creating a pyramid with emojis


for (let i = 0; i < 10; i++) {
    console.log(i, ":-)")
}

for (let j = 1; j <= i; j++) {
    console.log(i, ":-)")
}

// Create a function that removes the first element of the array below and adds “kiwi” to the end of the array

let favoriteFruits = [
    "mango",
    "lychee", 
    "rambutan", 
    "papaya"
]
favoriteFruits.shift(); // Removes the first item of the list
console.log(favoriteFruits)

favoriteFruits.push("Kiwi") // Adds "Kiwi" to the end of the list
console.log(favoriteFruits)

/* Write a function named assignGrade, that takes one argument, a number score.
Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.” Invoke that function for a few different scores and log the result to make sure it works. (edited) */

function assignGrade(x) {
    if (x >= 7) {
        console.log("A")
    } 
    if (6 > x > 5) {
        console.log("B")
    }
    if (4 > x > 0 ) {
        console.log("C")
    }
}

console.log(8)

// REVIEWING HOMEWORK EXERCISE 01/11/23 (BONUS)

function assignGrade(score) {
    case score >= 90:
        console.log("A")
        break
    case score >= 79 && score <= 89: // this range is not necessary
        console.log("B")
        break
    case score >= 69 && score <= 79:
        console.log("C")
        break
    case score >= 59 && score <= 69:
        console.log("D")
        break
    case score < 69:
        console.log("F")
        break
    default:
        console.log("Enter grade")
        break
}

assignGrade(72)

// Create a function that takes an array of numbers and returns a new array with the square of each number.

let numbers = [2, 7, 13, 24];
let newArray = [];

for (let i = 0; i < numbers.length; i++) {
  newArray.push(Math.pow(numbers[i] ** 2));
}

console.log(newArray);

// Create a function that takes in a number of two-pointers and three-pointers made and returns a basketball team’s total score. Console.log the results.c