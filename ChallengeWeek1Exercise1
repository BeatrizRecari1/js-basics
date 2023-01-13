// Write a simple temperature converter. Given a temp in C output the equivalent temp in F => "25C is 79F"

function numToTemperature (temperature = 0, convertTo) {
    if (convertTo === "C") {
        const tempC = (temperature - 32) * (5 / 9)
        return tempC
    }
    else {
        const tempF = (temperature * (9 / 5) + 32)
        return tempF
    }
}

const queryTemperature = 0
const answer = numToTemperature(queryTemperature, "F");
console.log(`${queryTemperature} "C" is ${answer} "F"`)