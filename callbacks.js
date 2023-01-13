function sayHello() {
    console.log("Hello, there.")
}

/* function goSlow() {
    setTimeout( () => console.log("Slow...") , 500)
} */

function sayGoodBye() {
    console.log("Say Goodbye.")
}

sayHello()
sayGoodBye()

// What if I want to guarantee that Hello comes before goodbye?

function sayHelloThen(next) {
    console.log("Hello there!")
    next()
}

sayHelloThen(() => console.log("Goodbye!"))