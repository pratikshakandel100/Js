// square and sum the array elements using arrow function and then find the verage os the array

let arr = [2,3,4,5,6,7,8,9]
let task = (array)=>{
   let square =  array.map(
        function square(el){
           return  el**2;
        }
    )
    let sum = square.reduce(
        function sum(acc,square){
            return acc+square;
        }
    )
    
    let average = sum/square.length;
    return {sum, average};
}
let result = task(arr);
console.log(result);


//Create a new array whose elements are in uppercase of words present in the original array
// let name = ["anushka", "sristika", "unisha", "sony"]
// let newName = name.map((el)=>{return el.toUpperCase()})
// console.log(newName)



//Write a function called doubleAndReturnArgs which accept an array and a variable number of arguments. 
//The function should return a new array with the original array values and all the additional arguments doubled
let doubleAndReturnArgs = (array, ...args) =>{
    let newA = [...array];
    args.forEach((el)=>{
        newA.push(el);
        newA.push(el);
    })
    return newA;
}

// console.log(doubleAndReturnArgs([1,2,4], "apple", "Mango"))

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all 
//the the keys and values of the first object and second objects.

let mergeObjects = (Ob1, Ob2)=>{
    let merge = {...Ob1, ...Ob2}
    return merge;
}
let m1 = {
    name: "Surja Shreatha",
    age: 17
}
let m2 = {
    goal : "Sun",
    must: "Limitless"
}
console.log(mergeObjects(m1,m2))