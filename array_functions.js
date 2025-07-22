//Q1.Create an array to store companies ->"Bloomberg",'Microsoft","Uber","Google","IBM","Netflix":Remove the first company from the array, Remove uber &Add Ola on its place, Add amazon at the end
//Ans:
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies.shift()
companies.splice(1,1,"Ola")
companies.splice(5,0,"Amazon")