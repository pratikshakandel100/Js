//Types of function


//Function Declaration
// let x = sum(4,5) // can call before declaration
// function sum(a,b){
//   return a + b;
// }
// console.log(x);


//Function Expression -> Function stored inside variable

// const sub = function(a,b){
//     console.log(a-b);
// }
// sub(9,4)

//Arrrow Function

// const mul = (a,b) => {
//   console.log(a*b)
// } 
// mul(9,3)


//setTimeout
// setTimeout(()=>{
//     console.log("Hello")
// }, 2000)
// console.log("Hi")


let greett = function(a, c){
    console.log(a)
    c;
}

function greet(){
    console.log("Beautiful")
}
greett("Preeti", greet())