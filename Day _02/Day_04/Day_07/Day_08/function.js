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

const sayHello =() ={
    return sayHello =>console.log(sayHello)
}
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

