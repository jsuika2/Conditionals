//created by Jeremy Suika on jan 22 2014


// Condition: If Carter reads three or more books he can watch a movie + he is not fussy boy

//          but if he cleans his room he can still watch that movie



alert("Carter can watch a movie if he reads at least 3 books and is not fussy today.");  //to display the conditions and the story
alert("If he does not read or is fussy, he can watch a movie only if he cleans up his room.") //this alert is because it would of been to long in one alert


var booksRead=prompt("How many books did Carter read today?","");     //This variable is to show exactly how many books Carter read, the answer will be in a prompt
var minBooksRead=3;                                                   // This variable represents the # of books Carter must read, its 3, and does not change.

var fussyBoy=prompt("Was Carter fussy today? (yes or no)","");        //If he is "fussy"? which will be asked in a yes or no Prompt. Anything other then "NO" will result in a FALSE statement in the conditional part.
var cleanUp=prompt("Did Carter clean up his room? (yes or no)","");   //If he cleans up his room, which will be asked in a yes or no Prompt.



if(booksRead >=minBooksRead & fussyBoy=="no"){
    console.log("You can watch a movie.");

}else if(cleanUp=="yes")
    console.log("Since you cleaned your room you can still watch a movie, even though you did not read and were fussy.")
else{
    console.log("Sorry Carter, no movie today");
