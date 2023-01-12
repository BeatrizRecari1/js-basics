const cuisine = [
    "thai",
    "JA",
    "KR",
    "JP",
    "Haitian",
    "IN",
    "CH"
]

console.log("array =>", cuisine);

cuisine.push("MX"); // Adds the item to the last position in the array
console.log("array-push =>", cuisine);

cuisine.pop() // Removes the last item in the array
console.log("array-pop =>", cuisine);

cuisine.unshift("IT"); // Puts the item in the first position within the array
console.log("array-unshift =>", cuisine);
cuisine.shift("IT"); // Removes the first item in the array
console.log("array-shift =>", cuisine); 

cuisine[20] = "Jewish";
console.log("array-key 20 =>", cuisine);