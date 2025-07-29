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
