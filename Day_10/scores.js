const marks = [90, 84, 82, 95, 30];

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

//const topScore = marks.reduce((accumulator, currentValue) => {
//  return currentValue > accumulator ? currentValue : accumulator;
//},);
 const topScorer= ((scores).reduce(topStudent,Student) =>( topStudent.marks >Student.marks ? topStudent:Student);

 