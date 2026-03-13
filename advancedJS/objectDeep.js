function mul(num){
    return num*1;
}

// let a = mul(6);
// console.log(a)
// a.power = 4
// console.log(a)
// mul.power = 2;
// console.log(mul(1))
// console.log(mul.power)
// console.log(mul.prototype)



function createUser(username, score){
    this.username = username;
    this.score = score;
    add = (()=>{
        console.log("This is a function.")
    })

}
createUser.prototype.increment = function(){
    this.score++;
    console.log(score);
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai", 25);
const tea =  new createUser("tea", 250);
console.log(tea.increment());

/*
Here's what happens behind the scenes when the new keyboard is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor 
fuction. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is
bound to the newly created object. If no explicit return value is specified from the constructor, js 
accumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it don't return a 
non-primitive value(object, array, function etc.) the newly created object is returned.
*/