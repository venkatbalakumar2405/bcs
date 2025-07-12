const marks =[90,84,82,95,30]
//find the top score 
// output
//Use Reduce
//output
//95

const result = array.reduce((accumulator, currentValue) => {
  // Compare scores and return the higher one
  return (currentValue.score > accumulator.score) ? currentValue : accumulator;
}, initialValue);