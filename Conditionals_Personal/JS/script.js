//created by Jeremy Suika on jan 23 2014
//conditionals_personal

//If I sell 10 plus cars I get a $1,000 bonus. So the bonus is conditional on PROMPTS being > 10 cars.

var bonus


var amountCarsSold=prompt("How many cars did you sell this month","");

var bonus="$"+1000;

var eachCar="$"+100;

if(carsSold > 10){
    console.log(bonus);
}