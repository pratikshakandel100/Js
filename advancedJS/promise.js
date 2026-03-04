// 🎯 Task: Order Processing System
// Create these functions:

// createOrder()
// processPayment()
// generateInvoice()
// sendConfirmationEmail()

// Rules:

// Each function must:
// Return a Promise
// Use setTimeout (1 second delay)
// Log when completed
// Randomly fail (20% chance using Math.random())

let createOrder = ()=>{
    let result =  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let create = (Math.floor(Math.random()*10) + 1)
            console.log(create)
            if(create > 2){
                return resolve("You have created your order successfully!")
            }
            else{
                return reject("Sorry! It's too late")
            }
        },1000)
        
    })

}
createOrder()