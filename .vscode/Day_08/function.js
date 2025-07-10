function getWinStat(team) {
  return team?.stats?.win ? team.stats.win : "Data not found";
}
const getWinStat = (team) =>
  team?.stats?.win ? team.stats.win : "Data not found";
//How to print Hello!
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}
console.log(sayHello);
var x = sayHello();
sayHello()();
 

const x = ()=> "Hi"
//
//const sayHello =() ={
 //   return sayHello =>console.log(sayHello)
//}
const  sayHello =()=>() => console.log("Hello!!");


const add =(x) =>(y)=>x+y;
// x:6 y:9
console.log();//14

const  add1= (x)=>(y)=>x+y;

function add(x){        // lexical scope and closure
    return function(y){
        return x+y;
    }
}
//const add5=add(5);
const add5=(y)=>5+y;//anonymous function
//1.currying----->functional programming  style(paradigm)
//2.Partial Application
//3.Point-free style
const add=(x) =>(y) =>x+y;
//const add5=add(5);
console.log(add5(10))

//1.1
  //TASK 1.1
  const avengers=[
    "HULK",
    "IRON MAN",
    "BLACK WIDOW",
  "CAPTAIN AMERICA",
  "THOR",]

    //function movie{
    //for (var index in avengers)
     //   {
      //  console.log ("`$(avengers[index]) contain,avengers[index].length ");
    //}
    //}
console.log("Normal for loop")
    for( let i=0;i<avengers.length;i++)
{
    console.log(`${avengers[i]} contains ${avengers[1].length} letters}`);
}
console.log("for ..in loop")
for (let i in avengers)
    {
        console.log(`${avengers[i]} contains ${avengers[i].length} letters`);

}
console.log("for...of loop")
for (let avengers of avengers){
    console.log(`${avengers} contains ${avengers.length}letters`);
}
//Task 1.2 -Loop inside printCase
//printCast
function printCast (avengers){
    
console.log("for...of loop")
for (let avengers of avengers){
    console.log(`${avengers} contains ${avengers.length}letters`);
}
}
//Task 1.3 .1
 printPattern("❤,5")
 //clue :repeat()
 const  emoti="❤";
  function printPattern(emoti,rows)
  {
    for(1=0;i<rows;i++)
    console.log(`${emoti}.repeat(i));
  }

    }
  // Task 1.4.1
  
const nums = [80, 43, 72, 47, 20, 21];
getEvenNumbers(nums);
const getEvenNumbers=(nums)=>{}
    const nums = [80, 43, 72, 47, 20, 21];

const getEvenNumbers = (nums) => {
  const evenNums = [];

  for (let num of nums) {
    if (num % 2 == 0) {
      evenNums.push(num);
    }
  }

  return evenNums;
};

console.log(getEvenNumbers(nums));