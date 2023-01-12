const name = 'Jiho';
const favColor = 'green';

// Concatenation
const fullSentence = 'Hello, ' + name + '. Your favorite color is ' + favColor;
console.log('contact=>', fullSentence);

// Template Literals
const fullSentence2 = `Hello ${name}. Your favorite color is ${favColor}`;
console.log('contact=>', fullSentence2)

//.length 
console.log('string length', fullSentence.length);

//.toUpperCase()
console.log('to upper case', fullSentence.toUpperCase());

//.toLowerCase()
console.log('to lower case', fullSentence.toLowerCase());

//trim: removes space from the front + back
console.log('trim', fullSentence.trim());

//.replace()
const newSentence = fullSentence.replace('Hello', 'Yo');
console.log('replace', newSentence);

// substring()
const otherSentence = "integer"
console.log ( "substring:", otherSentence.substring(0,3) );

// .startsWith()
console.log(otherSentence.startsWith("int"))

// .includes()
const oneMoreSentence = "Hi Danny, you are not Tony";

const searchTerm = "Mack"
const result = oneMoreSentence.includes(searchTerm);

console.log(result);

// .indexOf()
const newWord = "I like Papaya";

const searchTerm2 = "love";
const result2 = newWord.indexOf(searchTerm2)

console.log(result2)

// .split()
