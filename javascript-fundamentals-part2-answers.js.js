// Lecture: Functions
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}

describeCountry("UK", 66, "London");
describeCountry("Philippines", 110, "Manila");
describeCountry("Australia", 25, "Canberra");

// Lecture: Function Declarations vs Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

percentageOfWorld1(790);
percentageOfWorld1(79);
percentageOfWorld1(1818);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

percentageOfWorld2(790);
percentageOfWorld2(79);
percentageOfWorld2(1818);

// Lecture: Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;

percentageOfWorld3(790);
percentageOfWorld3(79);
percentageOfWorld3(1818);

// Lecture: Functions Calling Other Functions

function describePopulation(country, population) {
  percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
}

describePopulation("Philippines", 110);
describePopulation("UK", 66);
describePopulation("Australia", 25);

// Lecture: Introduction to Arrays

const populations = [30, 110, 66, 25];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(30),
  percentageOfWorld1(110),
  percentageOfWorld1(66),
  percentageOfWorld1(25),
];


