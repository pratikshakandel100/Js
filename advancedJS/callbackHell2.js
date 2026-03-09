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

let placeOrder = (callback)=>{
    setTimeout (()=>{
        console.log("Your food is placed")
        callback();
}, 2000)
}
let prepareFood = (callback)=>{
    setTimeout(()=>{
        console.log("Your food is being prepared.")
        callback()
    },3000)
}

let packFood = (callback)=>{
    setTimeout(()=>{
        console.log("Your food is packed")
        callback();
    },2000)
}

let assignDeliveryBoy = (callback)=>{
    setTimeout(()=>{
        console.log("Your food is assign to delivery boy")
        callback()
    },2000)
}
let delivered = () => {
    setTimeout(()=>{
        console.log("Your food is delivered")
        
    },2000)
}

placeOrder(()=>{
    prepareFood(()=>{
        packFood(()=>{
            assignDeliveryBoy(()=>{
              delivered()
            })
        })
    })
})