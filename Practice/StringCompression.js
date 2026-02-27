//"aaabbcccdaa" -> a3b2c3d1a2
let str = "aaabbcccdaa";
let previousS = str[0]
let currentS;
let count = 1;
let ccount = 0;
let arr = [];
for(let i = 1; i < str.length; i++){
    currentS = str[i]
   if (previousS === currentS){
      count++;
   }
   else if (previousS != currentS){
       arr.push(previousS + count);
       count = 1;
   }
   
   previousS = currentS;
      
}
arr.push(previousS + count)
let final = arr.join('');
console.log(final)


