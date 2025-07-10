var y1="present";
var y2="absent";
var y3="present"
if(y1=="present" && y2=="absent"&& y3=="present")
{
 console.log("Class Started");
}
console.log("No class");
if((y1,y2,y3).every(n=>n="present"))
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
//task 4.1
 const movies = [
  { id: 1, title: "Baahubali", director: "S. S. Rajamouli", year: 2015 },
  { id: 2, title: "Arjun Reddy", director: "Sandeep Reddy Vanga", year: 2017 },
  { id: 3, title: "Mahanati", director: "Nag Ashwin", year: 2018 },
  { id: 4, title: "Eega", director: "S. S. Rajamouli", year: 2012 },
  { id: 5, title: "Jersey", director: "Gowtam Tinnanuri", year: 2019 },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds movies by director sorted by year
const getMovieDetails = (movies, id) => {
    const  filterMovie = movies.filter((movie) => movie.id == id);

}
    if (filterMovie.length ==0)
 {       return "Movie not found"
}
    return  `${title} is an ${genre} movie;   
};


console.log(JSON.stringify(getTitlesByDirectorSortedByYear(movies, "S. S. Rajamouli")));
console.log(JSON.stringify(getTitlesByDirectorSortedByYear(movies, "Nag Ashwin")));