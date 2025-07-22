//Q1.For a given array with marks of students-> [85,97,44,37,76,60]. Find the avg marks of entire class.
//Ans:
let marks=[85,97,44,37,76,60]
 
let sum=0

for(let val of marks){
    sum= sum+=val;
    avg=sum/marks.length;
}
console.log("average marks of entire class is",avg)