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
