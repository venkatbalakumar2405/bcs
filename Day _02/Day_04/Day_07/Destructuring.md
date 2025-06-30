## Exercise 9
Destructuring
Extract properties from an object using destructuring assignment.
const person = { name: "Alice", age: 30, city: "New York" };

### Answer
// Use object destructuring to extract name and age
const extractPersonInfo = ({name,age}) => {
  // Your code here - use destructuring
  
  return `${name} is ${age} years old`;
};

console.log(extractPersonInfo(person));
## Exercise 