Array.includes()......> includes only value
Array.some().......>includes some function
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


