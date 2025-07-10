var y1="present";
var y2="absent";
var y3="present"
if(y1=="present" && y2=="absent"&& y3=="present")
{
 console.log("Class Started");
}
console.log("No class");
if(([y1,y2,y3]).every(n=>n="present"))
{
    console.log("Class Started")
}
console.log("no class");
//task 1.2
const students = [
  { name: "Aarav", status: "present" },
  { name: "Divya", status: "absent" },
  { name: "Rohan", status: "present" },
];
//task 1.2.1 with &&
if (students[0].status && students[1].status&& students[3].status=="present")
{
    console.log("Class started")
}
else
{
    console.log("no class")
}
//task 1.2.1 with every()

if(students[0].status,students[1].status,students[2].status.every(students[status])=="present")
{
    console.log("Class started")
}
