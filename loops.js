// //loops practice
// // Q1.Print all even numbers from 0 to 100
for (let i=0 ;i<=100; i=i+2) {
    console.log(i);
}


//Q2. Guess the correct number game:

let compNum= 45
let userNum= prompt("Guess the number between 1 to 100: ");

while(userNum!= compNum) {
    userNum= prompt("Sorry! but you guesed wrong number! Try again: ");

}

console.log("Congratulations! You guessed the correct number: " ,compNum);