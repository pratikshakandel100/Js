let arr = ["Cat", 1,2, 4, 5,24.6,"Mango"];
let print = (arr) =>{
  console.log(arr)
}
arr.forEach(print)

let num = [1,2,3,24,5,6,24,44,243,343,2343];
let even = num.filter((el)=>{
    if (el%2 == 0){
      return el
    };
})
console.log(even)

