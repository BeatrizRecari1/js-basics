//Given a number of rows and columns and character, output a grid of "*" and 

function rowsOfStars (r, c, emoji) {
    const rowStar = (emoji.repeat(c))
    for (let i = 0; i < r; i++) {
        console.log(rowStar)
        }
    
}

console.log(rowsOfStars(10,30,":-)"))