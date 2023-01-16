// Create a function to calculate rows and columns in a grid form in an office (01/14/23)

function monitorCount(rows, columns) {
    let totalCount = rows * columns;
    return rows * columns
  }
  
  const numOfMonitors = monitorCount(5, 4);
  
  console.log(numOfMonitors);

  // Now let’s write another function that uses the monitorCount function to figure out the price.

  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200
  }
  
  const totalCost = costOfMonitors(5, 4);
  
  console.log(totalCost);

  // Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and if the plant needs to be watered:

  const plantNeedsWater = function(day) {
    if (day === "Wednesday"){
    return true;
  } else {
    return false;
  }
  };
  
  plantNeedsWater("Tuesday")
  console.log(plantNeedsWater("Tuesday"))

  // Let's create a sleep calculator for the week

  const getSleepHours = day => {
    switch (day) {
      case "Monday":
      return 8;
      break
  
      case "Tuesday":
      return 6;
      break;
  
      case "Wednesday":
      return 7;
      break;
  
      case "Thursday":
      return 5;
      break;
  
      case "Friday":
      return 7;
      break;
  
      case "Saturday":
      return 3;
      break;
  
      case "Sunday":
      return 5;
      break;
  
      default:
      return "Error!"
  
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");
  
  const getIdealSleepHours = IdealSleepHours => IdealSleepHours * 7; 
  
    console.log(getIdealSleepHours());
    console.log(getActualSleepHours())
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours > idealSleepHours) {
      console.log("You got " + (actualSleepHours - idealSleepHours) + "hours more of sleep than needed")
    }
    if (actualSleepHours < idealSleepHours) {
      console.log("You got " + (idealSleepHours - actualSleepHours) + " hours less of sleep than needed.")
    }
    else {
      console.log("You got the perfect amount of sleep!")
    }
    
  }

  // Write your code below (practicing nested for loops)

let bobsFollowers = ["Mike", "Josh", "Paula", "Sarah"];

let tinasFollowers = ["Mike", "Paula", "Henry"];

const mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++) {
  if (bobsFollowers[i] === tinasFollowers[j]) {
    mutualFollowers.push(bobsFollowers[i])}
  }
}

// Practicing "break" word in for loops

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for(let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i])
  if (i === 2) {
    break;
  }

}

console.log('And if you don\'t know, now you know.')


  
  
   