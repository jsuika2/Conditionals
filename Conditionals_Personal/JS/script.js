//created by Jeremy Suika on jan 23 2014
//conditionals_personal

//If I sell 10 or more cars I get a $1,000 bonus. So the bonus is conditional on PROMPTS being > 10 cars.

alert("You get a bonus for selling 10+ cars each month...."); //The alert to signify exactly what you have to do to get get a bonus

var amountCarsSold=prompt("How many cars did you sell this month",""); //Once you type how many cars sold it will car over to the conditionals and the math for totaling in the equation;

var bonus=1000;  //The amount for the bonus,          I put the $ sign in the console prompts as you cannot * $1000 but you can * 1000, eliminated special character


alert("If you have experience selling cars, you get $100 a car sold, if no experience, $75 a car sold")



var eachCar=prompt("How much money do you make per car? (express without $)","")



if(amountCarsSold >=10){
    console.log("Bonus of "+"$"+bonus+" plus you get $"+(eachCar * amountCarsSold)+ " for each car sold");
}else{
    console.log("No bonus this month, only "+"$"+eachCar * amountCarsSold);
}