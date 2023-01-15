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