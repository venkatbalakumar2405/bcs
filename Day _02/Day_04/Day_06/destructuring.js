const student = {
  name: "Abishek",
  age: 20,
  address: {
    city: "Trichy",
    state: "TN",
  },

  hobbies: ["cricket", "football", "carrom"],
};

// console.log(student.address1[0]);

console.log(student.address.city); // Trichy
console.log(typeof student.address); // object
console.log(student.address.state);

// Clue: Nested Destructing
//object destructuring
const {
  address: { city },
  hobbies:[hoby]
} = student;


console.log(city);
console.log(hoby);


const book = {
  name: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
  authorAge: 45
};

const details = {
  year: 2002,
  price: 1200,
  authorAge:55
};

// console.log(book.author);

const fullDetails = {...book,...details};
const fullDetails1 = {...book,}//copy by value

console.log(fullDetails);
const fullDetails2={...details,...book};
console.log(fullDetails2);