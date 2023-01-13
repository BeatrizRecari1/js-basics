const number = [
    1,2,3,4,5,7,8,100,1458,14892,28240
]

const clog = (label,log) => {
    console.log(label,":",log)
    console.log(`${label}: ${log}`);
}

const render = number[1]
const [a,b,c] = number

clog("old way",render)

clog("destructure",a)
clog("destrucute",b)
clog("destrucure",c)

const person = {
    firstname: "Jiho",
    lastname: "Sohn",
    age: 47,
    hair: "black",
    eye: "brown",
    height: 178,
    gender: "m"
}

// const firstname = person.firstname
// const lastname = person.lastname
// const age = person.age
// const hair = person.hair

const {firstname, lastname, age, hair, eye, height, gender } = person

clog("hair", hair)



