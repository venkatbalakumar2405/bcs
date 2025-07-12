const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that formats movie titles with their ratings
const getTitlesAndRatings = (movies) => {
  // Your code here

const avgRating = movies.map(movie=>{
    movie.reduce(movie.ratings)=> movie.filter (every.movies)
     return 
}) 
};

console.log(getTitlesAndRatings(movies));