const clog = (label,log) => {
    console.log(`${label}: ${log}`);
}

const person = {
    name: "Beatriz",
    gender: "female",
    age: 35
}

module.exports.person = person;
module.exports.clog = clog;


