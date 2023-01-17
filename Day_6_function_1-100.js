// Write a function that prints (console.log) the numbers from 1 to 100. But log “Fizz” instead of the number if it is divisible by 3, “Buzz” if the number is divisible by 5, and “FizzBuzz” if the number is divisible by both 3 and 5.



// Edilma's version


function buzzFizz (numberLimit = 100) {
    for (let i = 0; i < numberLimit; i++) {
        console.log(isBuzz(i));
    }
}


function isBuzz(aNumber = 1) {
    switch (true) {
        case (aNumber % 3 === 0):
        return "Fizz";
        
        case (aNumber % 5 === 0):
        return "Buzz";

        case (aNumber % 3 === 0 && aNumber % 5 === 0):
        return "FizzBuzz";

        default:
        return aNumber
    }
}
    buzzFizz()