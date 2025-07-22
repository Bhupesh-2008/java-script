//Q1.For a given array with marks of students-> [85,97,44,37,76,60]. Find the avg marks of entire class.
//Ans:
let marks=[85,97,44,37,76,60]
 
let sum=0

for(let val of marks){
    sum= sum+=val;
    avg=sum/marks.length;
}
console.log("average marks of entire class is",avg)

//Q2. For a given arrayu with prizes of 5 items -> [250,645,300,900,50].all items have an offer of 10 % off on them. Change the array to store the final prize after applying offer
//Ans1.:
let items=[250,645,300,900,50]

let i=0;
for(let val of items){
    let offer= val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer =${items[i]}`);
    i++;
}

//Ans2: yeh simple h
for(let i=0; i<items.length;i++){
    let offer= items[i]/10;
    items[i]-=offer;

}
console.log(items)