// Extrapolates the data first and then makes a copy

const primeNumber = [
    2,
    3,
    5,
    7,
    11,
    13
];

const evenNumber = [
    2,
    4,
    6,
    8
]

const car = {
    manu:"Honda",
    year:"1997",
    color:"white"
}

const clog = (label,log) => console.log(label,": ", log);


const newArray = primeNumber;

clog("originalArray",newArray);
clog("new array",newArray);
primeNumber.push(17);
clog("originalArray",newArray);
clog("new array",newArray);

// Before running this code, comment out everything above
const newArray1 = [...primeNumber]
clog("original array", primeNumber);
clog("new array", primeNumber);
primeNumber.pop();
clog("original array - pop", primeNumber);
clog("new array - pop",newArray1);

// Comment out everything above before running the code below

const newCar = {...car};

clog("ori obj", car);
clog("copy obj", newCar);

const newNumberList = [...primeNumber, ...evenNumber]

clog("array combined", newNumberList)

const mathMax = Math.max(...primeNumber)
clog("Math Max", mathMax);

const number1 = [1,3,5,7]
const number2 = [2,4,6,8]

//create one array with all the values from both arays
const combinedNumber = [...number1, ...number2]

clog("combined array", combinedNumber);

const check1 = combinedNumber[0]
clog("check", check1);

