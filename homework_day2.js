//Q1. Get user to input a number using prompt and check if it is divisible by 5 or not

let num=prompt("Enter a number ")
if (num%5===0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 5");
}


//Q2. Write a code which can give grades to students according to their scores:
let score = prompt("Enter your score: ");
if (score>=80 &&score<=100) {
    console.log("Grade A");
} else if (score>=70 &&score<=79) {
    console.log("Grade B");
} else if (score>=60 && score<=69) {
    console.log("Grade C");
} else if (score>=50 && score<=59) {
    console.log("Grade D");
}else if (score>=0 && score<=49) {
    console.log("Grade F");
}