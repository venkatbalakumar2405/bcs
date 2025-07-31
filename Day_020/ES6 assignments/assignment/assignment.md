# Exercise no1:
# Create a basic arrow function that adds two numbers. This is your first step into ES6!
// Create an arrow function that adds two numbers
 const add = (a, b) => a + b;

console.log(add(5, 3));
console.log(add(10, 7));
# Expected Output:
8
17
# Exercise no 2:
// Create a function that returns a greeting using template literals

  const greetUser = (name) => {
    return `Hello, ${name}!`;
  };
# Expected Output:
Hello, Alice!
Hello, Bob!
# Exercise no 3:

//Safely access object properties that might not exist using optional chaining.
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob" };
const user3 = null;

// ===== YOUR CODE BELOW =====
// Create a function that safely gets a user's age

// ===== YOUR CODE BELOW =====
// Create a function that safely gets a user's age
const getUserAge = (user) => {
  return user?.age ?? "Age not available";
};

console.log(getUserAge(user1));
console.log(getUserAge(user2));
console.log(getUserAge(user3));
# Expected Output:
25
undefined
undefined
# Exercise no 4:-
# basic Nullish coelescence
// Create a function that gets theme with a default value
const getTheme = (settings) => {
  return settings.theme ?? "light";
};

console.log(getTheme(settings1)); // Output: "dark"
console.log(getTheme(settings2)); // Output: "light"
console.log(getTheme(settings3)); // Output: "light"
# Expected output:
dark
light
light
light
# assignment no :5
# to uncover the  user's age with optional chaining
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

const userWithAge = { user: { profile: { age: 25 } } };
const userWithoutProfile = { user: {} };

// ===== YOUR CODE BELOW =====
// Write a function that safely returns the user's age or a default message
const getUserAge = (data) => {
  return data?.user?.profile?.age ?? "Age not available";
};

console.log(getUserAge(userData));            // Output: Age not available
console.log(getUserAge(userWithAge));         // Output: 25
console.log(getUserAge(userWithoutProfile));  // Output: Age not available
# Expected output:-
Age not provided
25
Age not provided
# assignment no:6
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

// ===== YOUR CODE BELOW =====
// Write a function that calculates the total price of all products
const getTotalPrice = (products) => {
  return products.reduce((total, product) => total + product.price, 0);
};

console.log(getTotalPrice(products)); 
# output expected:-
2200
# assignment no 7
# Destructuring and spread operator
# Basic object destructuring
const person = { name: "Alice", age: 30, city: "New York" };

// ===== YOUR CODE BELOW =====
// Use object destructuring to extract name and age
const extractPersonInfo = (person) => {
  const { name, age } = person; // Destructuring here
  return `${name} is ${age} years old`;
};

console.log(extractPersonInfo(person)); // Output: Alice is 30 years old
Expected output:-
Alice is 30 years old
# assignment no 8
# using spread operator
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];

// ===== YOUR CODE BELOW =====
// Use spread operator to combine arrays
const combineArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

console.log(JSON.stringify(combineArrays(fruits, vegetables))); 
// Output: ["apple","banana","carrot","broccoli"]
Expected output:-

  },
  {
    "id": 3,
    "name": "Charlie",
    "position": "CEO",
    "skills": [
      "Strategy",
      "Vision",
      "Problem Solving"
    ]
  }
]
# Assignment no 9
# Write a function that returns the name of a user's first friend using nested destructuring and array methods.
const users = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];

// ===== YOUR CODE BELOW =====
const getFirstFriendName = (users, userId) => {
  const user = users.find(u => u.id === userId); // find user by ID
  const [{ name: friendName } = {}] = user?.friends ?? []; // nested destructuring from friends
  return friendName ?? "No friend found"; // fallback if undefined
};

console.log(getFirstFriendName(users, 1)); // Bob
console.log(getFirstFriendName(users, 2)); // Eve
console.log(getFirstFriendName(users, 3)); // No friend found (user ID doesn't exist)
console.log(getFirstFriendName(users, 4)); // No friend found (empty friends array)
# Expected output:-
Bob
Eve
User not found
Deepak has no friends 🥲

# Assignment no 10
Transform an array of numbers by doubling each value using the map method.

const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use map to double each number
const doubleNumbers = (numbers) => {
  return numbers.map(num => num * 2);
};

console.log(JSON.stringify(doubleNumbers(numbers)));
Expected output:
[2,4,6,8,10]
# Assignment no 11
Filter an array to keep only even numbers using the filter method.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ===== YOUR CODE BELOW =====
// Use filter to keep only even numbers
const getEvenNumbers = (numbers) => {
  return numbers.filter(num => num % 2 === 0);
};

console.log(JSON.stringify(getEvenNumbers(numbers)));
Expected output:-

[2,4,6,8,10]
# Assignment no 12
Sum all numbers in an array using the reduce method.
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use reduce to sum all numbers
const sumNumbers = (numbers) => {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
};

console.log(sumNumbers(numbers));
Expected output:-
15
# Assignment no 13
Write a function that generates a summary string for the top scorer using template literals and array methods.
const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
  { name: "Diana", score: 88 },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds and formats the top scorer
const getTopScorer = (scores) => {
  const topScorer = scores.reduce((max, current) =>
    current.score > max.score ? current : max
  );

  return `${topScorer.name} scored the highest with ${topScorer.score} points.`;
};

console.log(getTopScorer(scores));
Expected output:
Charlie scored the highest with 92 points.
# Assignment no 14:-
Write a function that filters movies released after a certain year and calculates their average rating.
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
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that calculates average rating after a specific year
const getAverageRatingAfterYear = (movies, year) => {
  const filteredRatings = movies
    .filter(movie => movie.year > year)
    .flatMap(movie => movie.ratings); // Flatten all ratings into one array

  if (filteredRatings.length === 0) return 0;

  const total = filteredRatings.reduce((sum, rating) => sum + rating, 0);
  return total / filteredRatings.length;
};

console.log(getAverageRatingAfterYear(movies, 2016)); // should return average of movies after 2016
console.log(getAverageRatingAfterYear(movies, 2020)); // should return 0 since no movie after 2020

Expected output:-
8.83
No movies after the specified year
# Assignment no 15:-
Write a function that checks if all movies of a certain genre have ratings above a certain value using array methods.
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
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that checks if all movies of a genre have high ratings
const allRatingsAboveForGenre = (movies, rating, genre) => {
  const genreMovies = movies.filter(movie => movie.genre === genre);

  if (genreMovies.length === 0) return false;

  return genreMovies.every(movie =>
    movie.ratings.every(r => r > rating)
  );
};

console.log(allRatingsAboveForGenre(movies, 7, "Action"));     // true
console.log(allRatingsAboveForGenre(movies, 8, "Biography"));  // false
Expected output:
true
false
# Assignment no 17:-
# Movie Titles and Ratings Formatter
Write a function that returns a string with each movie's title and its ratings joined by commas using array methods.
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
  return movies.map(movie => {
    const avgRating = movie.ratings.reduce((sum, r) => sum + r, 0) / movie.ratings.length;
    return `${movie.title} - Avg Rating: ${avgRating.toFixed(1)}`;
  });
};
Expected output:-

console.log(getTitlesAndRatings(movies));
[
  'Baahubali - Avg Rating: 9.0',
  'Arjun Reddy - Avg Rating: 8.7',
  'Mahanati - Avg Rating: 9.0'
]
# Assignment no 18:-
Write a function that returns a single array containing all ratings of all movies using array methods.
const movies = [
  {
    id: 1,
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    id: 2,
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    id: 3,
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that compiles all ratings into a single array
const getAllRatings = (movies) => {
  return movies.flatMap(movie => movie.ratings);
};

console.log(JSON.stringify(getAllRatings(movies)));
Expected output:-
[8,9,10,9,8,9,10,9,8]
# assignment no 19:-
Write a function that returns an array of titles of movies that have ratings above a certain threshold using array methods.
const movies = [
  {
    id: 1,
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    id: 2,
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    id: 3,
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
  {
    id: 4,
    title: "Eega",
    ratings: [7, 8, 9],
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds movie titles with high ratings
const getTitlesWithHighRatings = (movies, threshold) => {
  return movies
    .filter(movie => movie.ratings.some(r => r >= threshold))
    .map(movie => movie.title);
};

console.log(JSON.stringify(getTitlesWithHighRatings(movies, 9)));
// ["Baahubali","Arjun Reddy","Mahanati","Eega"]

console.log(JSON.stringify(getTitlesWithHighRatings(movies, 10)));
// ["Baahubali","Mahanati"]
Expected output:-
["Baahubali","Arjun Reddy","Mahanati","Eega"]
["Baahubali","Mahanati"]
# Assignment no 20:-
Write a function that returns an array of movie titles sorted by their average ratings in descending order.
const movies = [
  {
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    title: "Jersey",
    ratings: [9, 9, 8],
  },
  {
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
  {
    title: "Eega",
    ratings: [7, 8, 9],
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that sorts movie titles by average rating
const getTitlesSortedByAverageRating = (movies) => {
  return movies
    .map(movie => ({
      title: movie.title,
      avg: movie.ratings.reduce((sum, r) => sum + r, 0) / movie.ratings.length
    }))
    .sort((a, b) => b.avg - a.avg) // descending order
    .map(movie => movie.title);
};

console.log(JSON.stringify(getTitlesSortedByAverageRating(movies)));
Expected output:
["Baahubali","Mahanati","Arjun Reddy","Jersey","Eega"]

