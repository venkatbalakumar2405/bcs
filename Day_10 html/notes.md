To .splice -immutable and returns the array
splice -mutable methods
 deletes the count  from the index value
  since it is mutable  and add and deletes returns  array
  #sort - mutable
  frequent asked interview question
  [100,1,2,10,3].sort()
  ---sorting like dictionary
  [1,10,100,23]
  logic explained:-
  it sorts in type of version likes
  it sorts if positive value is the difference  as like  positive value moves in the ascending order
  if it is negative value it does not flips forward
-applicable for both zero values also

// positive value->swap ,--ve and o-same
// it should return positive ,negative and zero
  to find out 
  
  [100,1,2,10,3].sort((a,b)=>a-b)
sort function is a comparitive function
if a function tells both positive and negative  like boolean output it is called predicate function eg filter ,every ,sum will take the predicate functions 
includes  doesnot take function
//like filter returns boolean
//filter will return array type
//compare function will return positive ,negative and zero and >0,<0 ,==0
// mdn is written by mozilla team developers
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// Array of objects -> Array of stings
// Case 1:
const getTile = (book) => book.title;
const titles = books.map(getTile);

// const titles = books.map(getTile());  // ❌

// Case 2:
const titles1 = books.map((book) => book.title); // HOF

// Case 3: `this`
function getTile(book) {
  return book.title;
}

const titles3 = books.map(getTile);

// Case 4: `this`
const getTile = (book) => {
  return book.title;
};

const titles4 = books.map(getTile);
const marks = [90, 84, 82, 95, 30];

const topMark = marks.reduce((max, curr) => {
  if (max > curr) {
    return max;
  } else {
    return curr;
  }
});

const topMark1 = marks.reduce((max, curr) => {
  return max > curr ? max : curr;
});

const topMark2 = marks.reduce((max, curr) => (max > curr ? max : curr));

// Task 1.1
// Use Reduce
// Find the top score
// Output
// 95

const scores = [
  {
    marks: 32,
    name: "Yvette Merritt",
  },
  {
    marks: 57,
    name: "Lillian Ellis",
  },
  {
    marks: 22,
    name: "Mccall Carter",
  },
  {
    marks: 21,
    name: "Pate Collier",
  },
  {
    marks: 91,
    name: "Debra Beard",
  },
  {
    marks: 75,
    name: "Nettie Hancock",
  },
  {
    marks: 20,
    name: "Hatfield Hodge",
  },
];

// Task 1.2
// Use Reduce
// Find the top scorer name
// Output
// Debra Beard

const topScorer = scores.reduce((topStudent, student) =>
  topStudent.marks > student.marks ? topStudent : student
);

console.log(`${topScorer.name} scored ${topScorer.marks}`);
var result = [5, 6, 8].some((n) => n > 7); // || (or)

console.log(result); // true

var result = [5, 6, 8].includes(6);

console.log(result); // true

var result = [5, 6, 8].every((n) => n > 7); // && (and)
console.log(result); // false

var x1 = 20;
var x2 = 10;
var x3 = 15;

if (x1 > 15 && x2 > 15 && x3 > 15) {
  console.log("Cool");
} else {
  console.log("Hot");
}

// Task 1.1
var y1 = "present";
var y2 = "absent";
var y3 = "present";

if (y1 == "present" && y2 == "present" && y3 == "present") {
  console.log("Class started");
} else {
  console.log("No Class");
}

if ([y1, y2, y3].every((stu) => stu == "present")) {
  console.log("Class started");
} else {
  console.log("No Class");
}
// Task 1.2
const students = [
  { name: "Aarav", status: "present" },
  { name: "Divya", status: "absent" },
  { name: "Rohan", status: "present" },
];

// Task 1.2.1 with &&

if (
  students[0].status == "present" &&
  students[1].status == "present" &&
  students[2].status == "present"
) {
  console.log("Class started");
} else {
  console.log("No Class");
}

// Task 1.2.2 with every()
if (students.every((student) => student.status == "present")) {
  console.log("Class started");
} else {
  console.log("No Class");
}

console.log(
  students.every((student) => student.status == "present")
    ? "Class started"
    : "No Class"
);

if ([x1, x2, x3].every((n) => n > 15)) {
  console.log("Cool");
} else {
  console.log("Hot");
}

if ([20, 10, 15].every((n) => n > 15)) {
  console.log("Cool");
} else {
  console.log("Hot");
}
  
  const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// Array of objects -> Array of stings
const getTitles = (books) => {
  return books.map((book) => book.title);
};

console.log(getTitles(books));

const getFictionTitles1 = (books) => {
  // 1. Filter
  const fictionMovies = books.filter((book) => book.genre == "Fiction");
  //  2. Transform
  const fictionTitles = fictionMovies.map((book) => book.title);
  return fictionTitles;
};

const getFictionTitles2 = (books) => {
  // 1. Filter
  const fictionMovies = books.filter((book) => book.genre == "Fiction");
  //  2. Transform
  return fictionMovies.map((book) => book.title);
};

const getFictionTitles = (books) => {
  // 1. Filter
  //  2. Transform
  return books
    .filter((book) => book.genre == "Fiction")
    .map((book) => book.title);
};

console.log(getFictionTitles(books));

// var result = [3, 4, 10, 5].map((n) => n > 7);

// console.log(result); // [false, false, true, false]

// [3, 4, 10, 5].filter((n) => n > 7);

// // [10]
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const getTitles = (books) => {
  const titles = [];
  for (const book of books) {
    titles.push(book.title);
  }

  return titles;
};

console.log(getTitles(books));
// 1. join()   Array -> String
// 2. split() String -> Array

const fruits = ["🍎", "🍊", "🍓", "🍍"];
console.log(fruits.join(", "));
// "🍎, 🍊, 🍓, 🍍"
console.log(fruits.join());

const basket = "🍎,🍊|🍓,🍍";
console.log(basket.split(","));

const quote = "Do or Die";

console.log(quote.split(""));
console.log(quote.split(" ")); // ["Do", "or", "Die"]

console.log(quote.split());