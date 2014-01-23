//created by Jeremy Suika on jan 23 2014
//conditionals_personal

//If I sell 10 plus cars I get a $1,000 bonus. So the bonus is conditional on PROMPTS being > 10 cars.


var amountCarsSold=prompt("How many cars did you sell this month","");

var bonus=1000;

var eachCar=100;



if(amountCarsSold > 10){
    console.log("Bonus of "+"$"+bonus+" plus you get $"+(eachCar * amountCarsSold)+ " for each car sold");
}else{
    console.log("No bonus this month, only "+"$"+eachCar * amountCarsSold);
}