//FUNCTIONS
//Q1. Create a function using the "function" keyword that takes a string as an argument &returns the no of vowels in that string.
//Ans:

function countVowels( str){
    let count=0
    for (const char of str) {
        if (
            char=="a"||char=="e"||char=="i"||char=="o"||char=="u"
            
           ) {
            count++
           }
        
    } 
    return count

}

// Same code to run with arrow function
const countVowels= (str) => {
     let count=0
    for (const char of str) {
        if (
            char=="a"||char=="e"||char=="i"||char=="o"||char=="u"
            
           ) {
            count++
           }
        
    } 
    return count
 
}