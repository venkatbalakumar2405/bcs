const x = 5;
const y = "5";

console.log(x == y); // true // allows coercions
console.log(x === y); // false // doesn't allows coercions

// const t1 = [100, 200]; // 1GB
// const t2 = [100, 200];
// const t3 = t1; // copy by reference

// // console.log(t1);
// // console.log(t2);
// // console.log(t3);

// // console.log(t1 == t2); // ==, === -> Address
// // console.log(t1 == t3);

// t1.push(300);
// t2.push(400);
// t3.push(500);

// console.log(t1); // [100, 200, 300]
// console.log(t2); // [100, 200,  400]
// console.log(t3); // [100, 200, 300, 500]

// console.log(t1); // [100, 200, 300]
// console.log(t2); // [100, 200,  400]
// console.log(t3); // [100, 200, 500]

// console.log(t1); // [100, 200, 300]
// console.log(t2); // [100, 200, 300, 400]
// console.log(t3); // [100, 200, 300, 500]

const t1 = [100, 200]; // 1GB
const t2 = [100, 200];
const t3 = t1; // copy by reference

t1.push(300);
t2.push(400);
t3.push(500);

console.log(t1);
console.log(t2);
console.log(t3);

const arr = [80, 70, 60];
arr[0] = 100; // Good
// arr = [60, 89, 100] // Reference Changes - ❌

// Object -> also address
// const -> Whenever address changes error
const student = {
  name: "Arjuna",
  age: 20,
  college: "SfiAC",
  isRich: true,
  "personal hobbies": ["Hockey", "Traveling", "Cricket"],
};

student.name = "Muthu";
student["personal hobbies"].push="swiming";
console.log(student);