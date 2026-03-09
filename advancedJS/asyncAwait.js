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

let placeOrder = ()=>{
    setTimeout (()=>{
        console.log("Your food is placed")
        
}, 2000)
}
let prepareFood = ()=>{
    setTimeout(()=>{
        console.log("Your food is being prepared.")
       
    },3000)
}

let packFood = (calback)=>{
    setTimeout(()=>{
        console.log("Your food is packed")
     
    },4000)
}

let assignDeliveryBoy = ()=>{
    setTimeout(()=>{
        console.log("Your food is assign to delivery boy")
       
    },5000)
}
let delivered = () => {
    setTimeout(()=>{
        console.log("Your food is delivered")
        
    },6000)
}

let process = async ()=>{
       await placeOrder();
       await prepareFood();
       await packFood();
       await assignDeliveryBoy();
       await delivered();
}
process()
