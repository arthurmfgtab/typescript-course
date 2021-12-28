// Tuple ___________________________________________________________________
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // This is a tuple
// } = {
//   name: "Arthur",
//   age: 24,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// Enums ___________________________________________________________________
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role; // This is a tuple
} = {
  name: "Arthur",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// Union ___________________________________________________________________

function returnInput1(input: number | string) {
  return `Your input has type ${typeof input} type`;
}
returnInput1(10);
// returnInput1('10')

// Literal ___________________________________________________________________
function returnInput2(input: "value1" | "value2") {
  return `Your input has type ${typeof input} type`;
}
returnInput2("value2");
