// const firstName = "Jiho"
// const lastName = "Sohn"

// no hanging comma after the last variable
const person = {
    firstName: "Jiho",
    lastName: "Sohn",
    age : 47
}

// dot notation
person.firstName

// bracket notation (if I don't put the quotation, it thinks it is a )
person["lastName"];

// Mutate a value in a property

person.firstName = "Tony";

// Adding new property to an object
person.height = 178

// Delete a property
delete person.height;



// + sign concatenates and comma is a different function
console.log("Hello" + person.firstName + " " + person.lastName);
console.log("age:", person.age);
console.log("person object:", person);
console.log("height:", person["height"])