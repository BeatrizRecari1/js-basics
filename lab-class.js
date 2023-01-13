// 1. WRITE A FOR-LOOP THAT OUTPUTS "I WILL NEVER GIVE UP" 10 TIMES
//2. CREATE A FUNCTION THAT RETURNS THE NUMBER OF VOWELS IN A GIVEN STRING

// First exercise

// for (let i = 0; i < 10; i++) {
//     console.log("I will never give up")
// }

// Second exercise

 function letCount (string) {
     let vowelsCount = 0;
     let vowels = ["a","e","o","i","u"];

     for (let i = 0; i < string.length; i++) {
         if (vowels.indexOf(string[i] !== -1)) {
             vowelsCount += 1;
         }
     return vowelsCount
     }
    
 }
console.log(letCount("Frankfurt"))

// EXAMPLE FROM FREECODECAMP.COM

// function vowel_count(str1) {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++) {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));
   