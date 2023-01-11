// const person = {
//    firstName: "Jiho",
//    lastName: 'Sohn',
//    age: 47
// }





const personarray = [
    "Jiho", //0
    "Sohn", //1
    47 //2
];

personarray[0] = "Tony";
personarray[3] = "Antoinette";

const fullName = personarray[0] + " " + personarray[1];

const totalLenght = personarray.length;


console.log(personarray);
console.log("fullName: ", fullName);
console.log("total:", totalLenght);
