let name = "   Karan Kundra ";

for(let i = 0; i <= name.length; i++){
      let character = name[i];
      let index = name.indexOf(character);
      console.log(`The index of ${character} is ${index}`)
}


console.log(name)
console.log(name.trim())
console.log(name.trim().toLowerCase())
console.log(name.trim().toUpperCase())

//slice - returns a part of a string as a new string
let statement = "IlovemyParents";
console.log(statement.slice(3))
console.log(statement.slice(-5))
console.log(statement.slice(-5,-3))  

//replace -> searches a value in the string and returns a new string with the value replaced

let peace = "OnNamaSiva";
console.log(peace.replace("Siva", "Siva&Parvati"))


//repeat -> returns a string with thw number of copies of a string
let fruit = "Mango";
console.log(fruit.repeat(10))

