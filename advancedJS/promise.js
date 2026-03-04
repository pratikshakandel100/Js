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

let createOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

           let create = (Math.floor(Math.random() * 10) + 1)
            if (create > 2) {
                return resolve("You have created your order successfully!")
            }
            else {
                return reject("Sorry! It's too late")
            }
        }, 1000)

    })
}
createOrder().then(
    (create) => {
        console.log("success for order")
    }
).catch((error) => {
    console.log(error)
})

let processPayment = () => {
    return new Promise((requst,resolve)=>{
    setTimeout(() => {
        let create = (Math.floor(Math.random() * 10) + 1)
        if (create > 5) {
            return resolve("You have process your payment")
        }
        else {
            return reject("Sorry! It's too late for your payment")
        }
    })})
}
processPayment().then(
    (create) => {
        console.log("success for payment")
    }
).catch((error) => {
    console.log(error)
})

let generateInvoice = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        let create = (Math.floor(Math.random() * 10) + 1)
        if (create > 7) {
            return resolve("Generated Invoice")
        }
        else {
            return reject("Sorry! It's too late for generation")
        }
    })})
}
generateInvoice().then(
    (create) => {
        console.log("success for invoice")
    }
).catch((error) => {
    console.log(error)
})

let sentConfirmation = () => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        let create = (Math.floor(Math.random() * 10) + 1)
        if (create > 7) {
            return resolve("Generated Invoice")
        }
        else {
            return reject("Sorry! It's too late for generation")
        }
    })})
}
sentConfirmation().then(
    (create) => {
        console.log("success for email confirmation")
    }
).catch((error) => {
    console.log(error)
})