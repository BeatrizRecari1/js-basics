// Given any array of numbers write a function that returns the largest number in that array (without using math.max)

function getLargestNumber(list){
    let largest = 0
for (let i = 0; i < list.length; i++) {
    if(list[i] > largest) {
        largest = list[i]
}
}
return largest
}
const myArray = [0,7,33]

console.log(getLargestNumber(myArray))