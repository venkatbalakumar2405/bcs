reserved words are keywords
today class notes 
#Box syntax and  dot syntax
# type of marks will print as object
# array as index and keys in object
#we use 10_0000 in between  as js ignores the underscore
# cons>let>var
# var is not recommended
# Re assignment
# which is faster == or ===
# ==  will checks the type coersion and checks the string and number
# === datatype and checks the values
# === not allows coercion
# == will convert the string into number and will it do  coercion  as well as orange and apple
# which checks directly  and === is faster than ==
### === TC 39 is the documentation like bible of javascript
## both == and ==== will be equal to each in which case?
### like examples  and scenarios when both the datatypes are as same in both sides it is equal in both  double equal and triple equal to scenarios
### doesn't allow coercion /typecasting
## copy by reference and copy by value
 # const t1=[100,200]
 # what will happen when we compare the two arrays
 # const t2 =[100,200]
 what will happen when console is executed
 # console.log(t1= t2)
 # console.log( t1=t3)
 # how it is true in the scenarios
 # it checks the address  of the value they will be interlinked in case of t3  and t1
# they are of different address
# == checks only the address after outsh the value 
# address are refered to hexadecimal numbers#
# base address will be stored in the t1 and t2 
# but the address cannot be  printed in  javascript 
# arrays can be used to store the address 
# base address will be added in according the array[5]
# object  also has concept as array
# one can have the same pain as other as interlinked
#.....-spread operator can be used  the values  stored in z1 will be the values of 100,200
const r3={....r1,...r2];//concatenation as well as merge}
# ES 6->Destructuring
# undefined
# takes value only if it is undefined
# null is a value
# holes concept if it is used to skip the values
# it is not needed for object destructuring
# we use the dry -don't repeat youself
#  const{name,}- it is based on position or index ,here it is based on the key
# network willl be assigned it is based on the key
## default value  is also seen in object destructing and problem of dry is solved
## default value  can be numbers as well as  string
##  if the name is not undefined then it takes the default value
## only if is also undefined value it takes the default value
# default value is a special value
## twisted -default value in case of undefined and also not value assigned
## we take nested objects
##  const student={
     name:"Abhishek",
     address:{
        city:"Trichy",
        state:"TN,
             },
   address1:["TN","Trichy"]
}
 #  console.log( student.address.city);//Trichy-- beauty of object it just search for city and brings the city 
 ## console.log( student.address1[0]
 # to avoid confusion it can be used to make the order  is not mattered in objects as well city and country cannot be matteree in case of arrays the order matters the most 
## Nested object .
###console.log(type of student .address)- object
##console.log( student.address.state)
### curly braces in object as different and same objects can be grouped in an object
## real time example is ipl - color of jersey 
is one of the case  of mixed data types
## array within object
### one of the key is hobbies
## need to destructure and print the city
## clue is useing nested destructuring
### just like onion peeling we can use destructuring
### nested destructuring can be used with default names as well city:c1 mdn references 

####
const [t1,t2,t3]=[100,200,400,500,600,700]
console.log(t1,t2,t3)
remaining values can be ignored
to get all the remaining elements
  t3 is an array so that the type of is an object
  //...Rest operator in  object  will collect the remaining elements,= left rest,= right will be spread
  //.....spread operator is used in array --concat two elements-applying butter between bread
//when we group it it will be rest operator -- collect 
// when we distribute or concat is is spread operator
// when we use the rest element must be last 
otherwise it will be error in javascript not in python
# instead of student.address.city we can use the destructurinng called  using t1,t2,t3.
# assignment operator  left rest and right is spread
# spread with object
# key  assigned with values --override  object will be overriden 
# object can have unique keys
# in python it is called dictionaries ,it must be unique key 
#prework and prelude
# cons book=
# const book={
    year:2002,
    price:1200,
};
const fullDetails={};
# only one value can be in one key so it will be done overriding
# whichever comes last will override it will be irrespective of the declaration  in the spreak we can use the last  key and value and the elements  will take the value to get overrided
# in real life scenario it can be used incase the datas are not given by the backend team as N/A
#  when merging the value in for not given or not provided values included the default values to be used in the pattern  for using the last values 
# always keep the default values in the begining 
# real life scenario it can be used to fulfill the values first then the remaining provided values
# everything  repeating the logic for dry aspects ,the function can be used for one time logic declared and it can be used and resued many times
# three lines can be called as declaration or definition
# function name  sum
# function can be called -->function call
# a piece of logic can be executed
# 60  will be assigned to n1  and 80 will be assigned to n2
#line of execution will be jumped 
# to sum  and n1 and n2 will be assigned
# const ans =n!+n2;
# return ans
# return to sum itself where it is called line
# so that the ans will be in result itself
# encapsulation of the  logice
# tomorrow the requirement may change  based on decimals  the round of can be used in function itself 
#  a logic can be changed once and it can be implemented in various scenarios as per the requirements 
#math.round can be used as well 
# funcion body  and should be used return keyword
 and it will be executed within curly braces  and it will return undefined since the return keyword is most important and it is common in beginer level program
 # n1 and n2 are parameters
 # 60 ,80 are argumennts 
 # underfined
 # number + undefined will return naN
 # nAN .toFiex(2)
 # toFixed will return only string 
 #like destructure it can be used for assigning value as zero
 but in parameter it will be given as zero
 #not a number will be returned 
 # lets provide the n1 also the default value as zero
 # n1=0->default value
 # Arguments >parameter
 var result6 =sum(50,60,70,90)
 remaining values can be collected along with rest opertor ....arr) as it can be used at the end alone
 as it can be used since it collects the elements and values 
1.terms,2,working.3dfault value with functions ,4 rests with functions
to fix  function converts number to string
in format 140.00  in this format 
#scope -life time of the variable
#block scope and function scope
let is also block scope  and const is a block scope
var is a function scope
if else also creates block scope
let and var cannot escape the jail like the scope
if function doesnot return it  will return undefined
but it will return notdefined error


hoisting -important question in javascript 
two phase execution-just in time compilation(JIT)
# first phase - compilation ONLY DECLARATION IS NOTED
# second phase-execution
#java-compiler(program)-java -Binary
# JS Guy,context like chitragupta
#JS GUY-DO YOU KNOW A? SKIPS THE OTHER STATEMENT
NO,NOTE
#2.EXECUTIN PHASE -VALUE NOTED  YES SKIP
#1 NOTED AND DON'T INITIALIZE NOT TO ALLOCATE MEMORY
# ERROR BUT IT IS NOT DEFINED WHEN IT  IS INITIALIZED
# DECLARATION AND EXECUTION
# CANNOT LOAD BECAUSE IT IS NOT INITIALIZWD IT IS THE ERROR
#LET CONST ARE SAME
//JS GUY-JS ENGINER-executes line by line JIT
//CONTEXT-Execution context-to keep note of all variabes and it's values 
//tdz-temporal dead zone are the lines above the declaration
the above lines cannot be accessed
both applicable in let and const
cannot access b before initialization
#new understanding
#local guy is weight
# folding
# lexical scope
# corner case of lexical scope is  global
# lexical scope is closure term
#own scope + lexical scope =closure father's closure
# global is the outermost lexical scope's scope
# declaration willbe undefined since it is declared before print
function is called declaration
# flow 2 phase execution
pc cannot be accessed in grandfather likewise the password cannot be acccesed in question
only the flow from outer to inner but not inner to outer
 4 slides
 pseudocode -> can contain only logic before coding
 https://carbon.now.sh/
 google slides
Anime- on google slides to play  and copy and paste
by paragraph and  fade in and fade out and appear
and paste by url image for insert image
and template selection
sli.dev-to used in markdown
only undefined will come for nested destructuring
only default values need to be given  first then only  linux and unix for mac os went for cost and money while linux came under ubuntu