// Lecture: Values and Variables
const country = "United Kingdom";
const continent = "Europe";
let population = 66;

console.log(country, continent, population);

// Lecture: Data Types
const isIsland = true;
let language;

console.log(country, continent, population, isIsland);

// Lecture: let, const and var
language = "English";
// language , isIsland and population should be set to let
// the data inside the variable can change

// Lecture: Basic Operators
const half = population / 2;
console.log(half);

let population = 66 + 1;
console.log(population);

const filUK = population > 6;
console.log(filUK);

const avg = population > 33;
console.log(avg);

const description =
  "Portugal is in Europe, and its 11 million people speak portugese";
console.log(description);

// Lecture String and Template Literals
const description1 = `The ${country} is in 
${continent}, and its ${population} million peple 
speak ${language}`;

// Lecture: Taking Decisions: if/else Statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${population - 33} above average`);
}

// Type Conversion and Coercion
let answers = [4, 617, 23, false, 1143];

// Lecture: Equality Operators == vs ===
const numNeighbours = prompt(
  "How many neighour countries does your country have?"
);

if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
// === is logging no borders because, the 1 from prompt is a string and not a number
// == may be useful because it can turn the string '1' to a number 1

// Lecture: Logical Operators
if (population < 50 && language == "English" && isIsland !== true) {
  console.log(`Sarah should live in ${country}`);
} else if (population < 50 && language !== "English" && isIsland === true) {
  console.log(`${country} does not meet your criteria`);
}

// Lecture: The switch Statement
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;

  case "spanish":
    console.log("2nd place in number of native speakers");
    break;

  case "english":
    console.log("3rd place");
    break;

  case "hindi":
    console.log("Number 4");
    break;

  case "arabic":
    console.log("5th most spoken language");
    break;

  case "other":
    console.log("Great language too :D");
    break;
}

// Lecture: The Conditional (Ternary) Operator
const ukPop = (population) =>
  population > 33
    ? console.log(`${country}'s population is above average`)
    : console.log(`${country}'s population is below average`);
