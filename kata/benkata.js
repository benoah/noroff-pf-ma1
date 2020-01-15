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

// answer on part one 
console.log(footballers.length);//10

for (var i = 0; i <= footballers.length; i++) {
  if (footballers[i] === footballers[1]) {
    console.log(footballers[1]);
  }
};


