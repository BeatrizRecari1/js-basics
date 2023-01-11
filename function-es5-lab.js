/*
Create your own person object with...
    first name
    last name
    fav color
    hobby

Create an array with your fav movie * 5

Create a function that generates the following...

console.log f1 Hi my full name is $firstN $lastN. Fav color is $favC and love $hobby.
console.log f2 I like these 5 movies. $movie0, $movie1
console.log f3 Create a math function that takes 3 parameters

*/

// First object exercise

const me = {
    firstName: "Beatriz",
    lastName: "Recari",
    favColor: "Blue",
    hobby: "Piano"
};

// Second exercise, create an array

const favMovies = [
    "Top Gun",
    "X-Men",
    "Avengers",
    "Titanic",
    "Pretty Woman"
];


// Third exercise, create a function

function introduction(){ 
    //const fullName = (firstName + " " + lastName)

    console.log("Hi my full name is " + me.firstName + " " + me.lastName + ". Fav color is " + me.favColor + " and I love " + me.hobby + "."
    )

    console.log("I like these 5 movies. " + favMovies[0] + " " + favMovies[1])
}

introduction()

const algebra = math(10, 4, 3);

function math(x, y, z) {
    return x * y / z; // Function returns the value of x multiplied by y divided by z
}

math(3, 10, 5)

// Homework from Bridgette 01/10/23
// First exercise, create a function that adds 2 numbers together

function bridgetteHomework (num1, num2) {
    return num1 * num2
}


const solution = bridgetteHomework(3, 7)
console.log(solution)

// Second exercise, create a function that returns the square of a number

function squareNumber (num1, num2) {
    return num1 ** num2
}

const solution1 = squareNumber(2, 3)
console.log (solution1)
// Third exercise, create an object called "student" and add 3 properties with their values

const student = {
    gender: "female",
    nationality: "German",
    age: "22"
};