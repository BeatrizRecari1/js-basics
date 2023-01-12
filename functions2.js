// There are 4 types of function --
// I. DO SOMETHING / N0 PARAMS
// II. DO SOMETHING / WITH PARAMS
// III. RETURN SOMETHING / NO PARAMS
// IV. RETURN SOMETHING / WITH PARAMS

// I. Example
function sayHelloWorld() // Calls function

// II. Example
function greetFriend(name) {
    console.log("Hello, " + name)
}

greetFriend ("Joe") // should console.log "Hello, Joe"

/// III. Example
funtion addTwoPlusTen() {
    const result = 2 + 10 // Calculate the value
    return result // If i don't put the name of the variable, the function does the calculation but doesn't say it to you
}

const answer = addTwoPlusTen() // answer = 2 + 10

console.log(answer)

// IV. Example

function addTwoNumbers(a, b) {
    const result = a + b
    return result
}

const mySum = addTwoNumbers(23, 17)

console.log(mySum)


// Real World type example

function calculateSalesTax(subtotal, taxRate) {
    const salesTax = (subtotal * taxRate).toFixed(2)
    return salesTax 
}