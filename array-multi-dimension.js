const numberArray = [
    "value",  //0
    "value2",  //1
    "value3",  //2
    [         //3
        "sub-value1",   //0
        "sub-value2",   //1
        "sub-value3"   //2
    ],
    [                   //4
        "sub-valueA",   //0 
        "sub-valueB",   //1
        "sub-valueC"   //2
    ],

    {       //5
        name: "Jiho", //name
        gender: "male", //gender
    }
];

console.log(numberArray[3][1]);
console.log(numberArray[5] ["name"]); // Or... console.log(numberArray[5].name);
                                        // When bracket notation, it either takes a variable or string, hence in order to work, name needs to be with quotation marks.