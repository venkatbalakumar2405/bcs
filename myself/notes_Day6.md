Array.includes()......> includes only value
Array.some().......>includes some function some is or operator
since complex logic can be used in Array.Some() only function can be included without value
and returns true or false as boolean values
if all the conditions are true the condition is true for array .every
[5,6,8,10].every(n=>n>4)
if incase it happens to be object within array
array of elements
[5,6,8,10].every(n=>typeof n=="number")
array.push()
will add at last
var arr =[4,5,7]
undefined
var result=arr.push[5]
undefined
//arr,result
arr.length
will return the length of the elements
arr will get modified 
map does not mutate 
filter doesnot mutation

mutation ----> will change
immutation------>       doesnot mutation
and checks the datatype and it will return only  number

unshift will add the element in front and will be opposite to push
array.unshift(50)=====>4 will return the length  of the array and return number  and will mutate->will change
array.reverse(). ====>  will mutate and will reverse the elements in array and will return result by mutate
if both  are have references they will return mutate
Array.slice()----> generally start with zero index--->will omit the end value 
extraction will start from first and end will be omitted but start with index only
negative number -->
one way to copy an array by copy by value
arr.slice(0,arr.length)
if you omit the last end value it will return array length it will return the index given as input
if first is omitted  start is lesser than  array length --->it will return start +array length will be used -->arr.slice(1) =arr.slice(-2)
if negative value is lesser than array length or start is omitted  ---->it will return full value--->arr.slice(-1)  will return 10
slice is able to take the part of an array
will be immutable
only it will be returned as in result for immutable values

if([20,10,15]).every((n)=>n>15){
    console.log("cool");
} else{
    console.log("hot");
}

var y1="present";
var y2="absent";
var y3="present"
if(y1="present" && y2="absent"&& y3="present")
{
 console.log("Class Started");
}
console.log("No class");

if([y1,y2,y3]).every(n=>n="present")
{
    console.log("Class Started")
}
console.log("no class");

Task1.2.2
const students =[
    {
        
    }
]
## Assignment
## Exercise 1.1 double number by map
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use map to double each number
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use map to double each number
const doubleNumbers = (numbers) => {
   return numbers.map((numbers) => numbers * 2);
  // Your code here

};

console.log(JSON.stringify(doubleNumbers(numbers)));

## 1.2 even number by filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ===== YOUR CODE BELOW =====
// Use filter to keep only even numbers
const getEvenNumbers = (numbers) => {
  return numbers.filter(n=>n%2==0)  
};

console.log(JSON.stringify(getEvenNumbers(numbers)));
//
## 3.1 

three conditions of map
 1.Returns the length must be same
 2. transforms the data type
 3. copy of array
 //array of objects into array of boolean
 removes the false analogy and returns only 10 for filter
 //np np hard on basis of problems and verify is easy but solving is difficult eg sudoku
 // the man who knew infinity  -legend ramanujam
 //by rules the array length must be same only
 [].map (n=>n*2) filters will return array
 .join()- it will return string 
 .includes()- it will return boolean false or true
 This will stop the chaining and can be used at the end
 .every 
 .slice will not terminate the chaining
 1.method name ,2.mutation yes or no,3 return datatype, and preferences for chaining-array and mutation must be NO
 stops chaining
[join,includes,some
] 1.no mutation,2.Data type other than array-boolean,eg