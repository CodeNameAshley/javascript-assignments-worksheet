
// Lecture: Values and Variables
const country = 'United Kingdom';
const continent = 'Europe';
let population = 66 ;

console.log(country, continent, population);

// Lecture: Data Types
const isIsland = true;
let  language;

console.log(country, continent, population, isIsland);

// Lecture: let, const and var
language = 'English'; 
// language , isIsland and population should be set to let 
// the data inside the variable can change

// Lecture: Basic Operators
const half = population / 2;
console.log(half);

let population =  66 + 1;
console.log(population);

const filUK = population > 6;
console.log(filUK);

const avg = population > 33;
console.log(avg);

const description = 'Portugal is in Europe, and its 11 million people speak portugese'
console.log(description);

// Lecture String and Template Literals
const description1 = `The ${country} is in ${continent}, and its ${population} million peple speak ${language}`;

// Lecture: Taking Decisions: if/else Statements
if(population > 33){
    console.log(`${country}'s population is above average`) 
} else {
    console.log(`${country}'s population is ${population - 33} above average`)
};

// Type Conversion and Coercion

let answers = [4, 617, 23, false, 1143];




