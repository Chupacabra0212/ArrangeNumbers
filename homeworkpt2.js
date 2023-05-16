// for (let l = 0; l < 11; l++) {
//   console.log(l);
// }

// // for... of loops -
// console.log(" ");

// let str1 = "Hello, world!";

// for (let character of str1) {
//   console.log(character);
// }

// let str2 = "Go Fuck Yourself World!";

// for (let letter of str2) {
//   console.log(letter);
// }

// console.log(" ");

// let pets = [
//   "Dog",
//   "Cat",
//   "Bird",
//   "Snake",
//   "Turtle",
//   "Spider",
//   "Horse",
//   "Fish",
//   "Lizard",
//   "Pig",
// ];

// for (let pet of pets) {
//   console.log(pet);
//   //   for (let char of pet) {
//   //     console.log(char);
//   //   }
// }
// console.log(" ");
// console.log("For in loops below here");
// console.log(" ");

// let dog = {
//   petName: "Bonbon",
//   species: "Doggy",
//   age: 17,
// };
// for (let details in dog) {
//   console.log(dog[details]);
// }

let cancellation = [
  -27, 27, 3, -3, 12, -12, -99, 99, 10101010101010, -1010101010010, 1, -1, 0,
  -0,
];

for (let p = 0; p < cancellation.length; p++) {
  for (let b = 0; b < cancellation.length; b++) {
    if (cancellation[b] > cancellation[b + 1]) {
      let int = cancellation[b];
      cancellation[b] = cancellation[b + 1];
      cancellation[b + 1] = int;
    }
  }
}

console.log(cancellation);
