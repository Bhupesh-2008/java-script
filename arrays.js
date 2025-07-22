let marks=[ 78,98,90,64]
let students=[ "harish","swamik","paul","faruk"]

for(let idx=0; idx<students.length; idx++) {
    console.log(students[idx])
}


// another way to use for loop for above loop
for (student of students) {
    console.log(student.toUpperCase())
}