// 🎯 Task: Food Delivery Workflow (Callback Hell)
// Create these functions:
// placeOrder()
// prepareFood()
// packFood()
// assignDeliveryBoy()
// deliverFood()
// Rules

// Each function must:
// Use setTimeout (1 second delay)
// Accept a callback function
// Log a message when completed
// Call the callback when done

let placeOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("You placed the food.");
            resolve();
        }, 2000)
    })
}

let prepareFood = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("We are preparing your food.");
            resolve();
        }, 2000)
    })
}

let packFood = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("We are packing your food");
            resolve();
        }, 2000)
    })
}

let assign = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("We assigned your food to delivery boy.");
            resolve();
        }, 5000)
    })
}

let devilered = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("We delivered your food.");
            resolve();
        }, 2000)
    })
}

placeOrder().then(prepareFood).then(packFood).then(assign).then(devilered)