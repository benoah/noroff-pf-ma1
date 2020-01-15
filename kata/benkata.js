// 1. given this array,
// use a for loop print out only 1 book of your choice.
var books = [
  "You Don't Know JS",
  "Computer Science Distilled",
  "Exploring ES6",
  "The Design of every day things"
];

var numberOfBooks = books.length;

for (var i = 0; i <= books.length; i++) {
  if (books[i] === books[1]) {
    console.log(books[1]);
  }
}
/* other way too do it.
for (var i = 0; i <= numberOfBooks; i++) {
  if (books[i] === "Computer Science Distilled") {
    console.log("Computer Science Distilled");
  }
}
*/

// is this the same code as above?

/*
for(var i=0;) <= books.length; i++) {
  if(books[i]=== books[1]){
    console.log("I would like to read:" + books [i]);
  }
}
*/

// write the code here, use this console to print the sentence and concatenate the book name to end.
// replace varToPrintBookName with the correct code to print a book name.
console.log("I would like to read: " + books[1]);


// 2. Look at the psuedocode below and convert it to CODE,
// build a switch statement to make sure it prints the correct log based on condition comparison
// variables and compare strings strings.
var bigMacBurger;
var burgerKing;
var pizzaHut;



bigMacBurger =  "Big Mac Burger";
burgerKing =  "Double Whopper";
pizzaHut ="Pepperoni Pizza";

if (bigMacBurger){
  console.log("Big Mac Burger");
}
else if(burgerKing){
  console.log("eating a burgerKing burger");
}
else if(pizzaHut){
  console.log("Pepperoni Pizza");
}
else{
  console.log("not hungry at the moment");
}


// switch 
var menu= burgerKing;



switch(menu){
  case "Big Mac Burger" :
    console.log("eating a McDonald's Big Mac" + bigMacBurger);
    break
  case "Double Whopper":
    console.log("eating a burgerKing burger");
  case "Pepperoni Pizza":
    default:
      console.log("not hungry at the moment");
    }
/* 
 "Big Mac Burger"
 "Double Whopper"
 "Pepperoni Pizza"

 IF something
    console.log("eating a McDonald's Big Mac" + bigMacBurger);
 ELSE IF somethingElse 
   console.log("eating a burgerKing burger");
 ELSE IF somethingElse
   console.log("not hungry at the moment");
 ELSE
   console.log("eating a Pizza");
*/


// 3. Use string concatenation to create these names with variables, and the + operator
/*
    Virgil van Dijk (Liverpool/Netherlands)
    Bernardo Silva (Man City/Portugal)
    Heung-min Son (Tottenham/South Korea)
    Robert Lewandowski (Bayern Munich/Poland)
    Roberto Firmino (Liverpool/Brazil)
    Cristiano Ronaldo (Juventus/Portugal)
*/

var players1 = "Virgil van Dijk (Liverpool/Netherlands)" ;
var players2 = "Bernardo Silva (Man City/Portugal)"
var players3 = "Heung-min Son (Tottenham/South Korea)"
var players4 = "Robert Lewandowski (Bayern Munich/Poland)"
var players5 = "Robert Lewandowski (Bayern Munich/Poland)"
var players6 = "Cristiano Ronaldo (Juventus/Portugal)"

// joing the string values ti variabel

var player = players1 + players2 + players3 + players4 + players5 + players6;
console.log (player);

// 4. get the length of the array, use a for loop to print out who you think is best footballer.
var footballers = [
  "Bernardo Silva",
  "Cristiano Ronaldo",
  "João Félix",
  "Karim Benzema",
  "Lionel Messi",
  "Pierre-Emerick Aubameyang",
  "Robert Lewandowski",
  "Roberto Firmino",
  "Sergio Agüero",
  "Virgil van Dijk"
];













/*
 6. PLANETARY INFO-DASH:::::

 Level 1::::::::::::::
 Given this array of planets using what you know about how to access data in an arrays index log out the:
  - Description,
  - Surface temperature and
  - Mass

  in the console logs bellow.

  tip: pass your variables into the console.log after comma ,
*/
console.log("\u{1F319} PLANETARY INFO-DASH:::::");

var planets = [
  [
    "MERCURY",
    [
      "The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days.",
      "-173 to 427°C",
      "330,104,000,000,000 billion kg (0.055 x Earth)"
    ]
  ],
  [
    "JUPITER",
    [
      "Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth.",
      "-108°C",
      "1,898,130,000,000,000,000 billion kg (317.83 x Earth)"
    ]
  ],
  [
    "EARTH",
    [
      "Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present.",
      "110 degrees Fahrenheit / 48 degrees Celsius, and the lowest around -126 degrees Fahrenheit / -88 degrees Celsius, maybe even lower",
      "6.6 sextillion tons"
    ]
  ],
  [
    "MARS",
    [
      "Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. It is the most widely searched planet for life.",
      "87 to -5 °C",
      "641,693,000,000,000 billion kg (0.107 x Earth)"
    ]
  ]
];









console.group(planets[1][0]); // Neptunes. done (please insert the correct array index to add Earth as a string label to the console, as previous done for Mercury)
console.log("Description:", planets[0][1]);
console.log("Surface temperature:", "-201 °C");    
console.log("mass:", "1,898,130,000,000,000,000 billion kg (317.83 x Earth)");
console.groupEnd();







console.group(planets[1][0]); // Neptunes.
console.log("Description:", planets[1][1][0]);
console.log("Surface temperature:", "87 to -5 °C");
console.log("mass:", "60,190.03 Earth days (164.79 Earth years)");
console.groupEnd();

console.group(planets[0][0]); // venus.
console.log("Description:", planets[0][1][0]);
console.log("Surface temperature:", "87 to -5 °C");
console.log("mass:", "641,693,000,000,000 billion kg (0.107 x Earth)");
console.groupEnd();

/*
 Level 2::::::::::::::
 Add 2 New planets of your choosing to the front of the Array : https://nineplanets.org
*/


