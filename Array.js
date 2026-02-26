// Array are Mutable

let num = [1,2,3,4,5,6,7,8];

let deletee = num.shift();
console.log(deletee)
console.log(num)

num.unshift(2)
console.log(num)


let D = num.pop()
console.log(D)
console.log(num)

let i = num.push(10);
console.log(i)
console.log(num)
console.log(num[0])

let friends = ["Sandhya", "Unisha", "Sandhya Didi", "Bibuti", "Sristika", "Anushka", "Sony"]
console.log(friends[3])
console.log(friends.indexOf("Sandhya didi")) // if no then it returns -1
console.log(friends.includes("Unisha")) // returns true if it includes if not then it returns false
let merge = friends.concat(num)
console.log(merge)
console.log(friends.reverse())

console.log(friends.slice(3))
console.log(friends.slice(-7, -2))

friends.splice(2, "Pratima Didi", "S", "Q", "W", "D", "J", "P")
console.log(friends)

// Constant Array
const A = [11,22,33,44]
console.log(A.reverse())
A.push(55)
console.log(A)


//Nested Array
num = [[0.1,0.2], [1,2],[1,1], [2,2], [3,3]]
console.log(num[2][1])


let array = [7,9,0,-2];
let n = 3;
console.log(array.slice(0,n))
console.log(array.slice(-n))

let game = "Badminton";
let index = 0;
let check = game[index];
if(game[index].toLowerCase() === true){
    console.log("The character is lower case");
} else {
    console.log("The character is upper case")
}


let p = "    Jerry   "
console.log(p.trim())