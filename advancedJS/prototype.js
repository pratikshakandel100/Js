

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.print = function(){
    console.log("Hello")
}
Array.prototype.learn = function(){
    console.log("Array")
}
heroPower.print();
myHeros.print();
myHeros.learn();


// inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}
 const Teacher = {
    makeVideo: true
 }

 const TeachingSupport = {
    isAvailable: false
 }

 const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
 }

 Teacher.__proto__ = User

 //modern syntax

 Object.setPrototypeOf(TeachingSupport, Teacher)
 // TeachingSupport has a access of Teacher




String.prototype.trueLenghth = function (){
       console.log(`${this.trim().length}`)
};
 let myName = "hitesh  ";
console.log(myName.trueLenghth())

