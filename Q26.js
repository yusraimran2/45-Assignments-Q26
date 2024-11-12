"use strict";
//26:Alien Color#2:Choose a color for an alien as you did in exercise 25,and write an if-else chain.
//.If the alien Color is green,print a statement that the player just earned 5 points for shooting the alien.
//.If the alien's color isn't green,print a statement that the player just earned 10 points.
//.Write one version of this program that runs the if block and another that runs else block
let alienColor = "green";
if (alienColor === "green") {
    console.log("Congrats!You just earned 5 points for shooting the alien!");
}
let alienColor2 = "red";
if (alienColor2 === "green") {
    console.log("Congrats!You just earned 5 points for shooting alien!");
}
else {
    console.log("Congrats! You just earned 10 points for shooting alien!");
}
