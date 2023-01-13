function doSomething() {
    console.log("SOMETHING")
}

console.log("START")

setTimeout(doSomething, 2000)

setTimeout(function doSomethingElse() {
    console.log("OTHER THING")
}, 1000)

console.log("END")