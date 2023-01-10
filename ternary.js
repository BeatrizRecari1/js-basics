const gender = 'male'

// A cleaner way of writing this condition without a switch statement

let greeting = 'Hello ma\'am'

if (gender === 'male') {
    greeting = 'Hello sir.'
}

console.log(greeting)

// ? - then
// : - else

const greeting2 = (gender === 'male') ? 'Hello sir.' : 'Hello ma\'am'

console.log(greeting)

// Let's do another example...

const age = 15

const message = (age >= 21)
                    ? 'Drink up!'
                    : 'Have some water.'

console.log(message)

// YES, we can nest ternaries...

const message2 = (age >= 21)
                    ? 'Drink all you want.'         
                    : (age >=18)
                        ? 'Have some more water.'
                        : 'Please leave now.'
console.log(message2)

