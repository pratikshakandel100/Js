// JavaScript function that returns array elements larger than a number
let arr = [23,43,54,23,12,12,43,54,56]
let Larger = (num) => {
    let lar = []
    for (let i of arr){
        if(num < i){
          lar.push(i); 
        }
    }
    return lar;
}
let largest_than_Number = Larger(45);
console.log(largest_than_Number);





//Practice 2
// JavaScript function to extract unique characters from a string. 
//  Example: str=“abcdabcdefgggh” ans=“abcdefgh”

let str = "abcdabcdefgggh";  
function Unique(str){
    let arr = [];
    arr.push(str[0])
    for(let i = 1; i < str.length; i++){
        let x = str[i];
        if(arr.includes(x) == false){
            arr.push(x)
        }
    }
    return arr;
}
let answer = Unique(str);
console.log(answer)
let U = answer.join('')
console.log(U)



//Practice 3
// Program to accept list of country and returns the longest country as output
let country = ["Australia", "Germany", "United States of America"]
function largest(arr){
    let largestC = arr[0];
for(let i of country){
    if(i.length > largestC.length){
       largestC = i;
    }
    
}
return largestC
}
let largestCountry = largest(country);
console.log(largestCountry);





//Practice 4
// Program to count the number of vowels in a String argument.
// let name = "Salman Khan";

let vowels = (str) => {
    let count = 0;
    let arr = ['a',"e","i","o","u"];
    for(let i of name){
        if(arr.includes(i)){
            count ++;
        }
    }
    return count;
}
let count = vowels(name);
console.log(`The count of vowels in ${name} is ${count}`)

//function to generate a random number within a range(start,end)
let randomN = (start,end) => {
    let diff = end - start;
   return Math.floor(Math.random() * diff) + start;
}
let a = randomN(100,200);
console.log(a)