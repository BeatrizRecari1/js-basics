// Create a multiplication grid for "x" to 10x10 using loops

function createGrid (rows = 3, columns = 3) {

   for (let i = 1; i <= rows; i++) {
        let rowNumber = [];
        for (let j = 1; j <= columns; j++) {
            rowNumber.push(i * j);
         }
    console.log(rowNumber);
   }
 }

createGrid();