let saveUser = (callbackk) =>{
    setTimeout(()=>{
    console.log("User saved to database")
    callbackk();
}, 2000)}

let email = (callbackk)=>{
    setTimeout(()=>{
        console.log("Sent Verification Email")
        callbackk();
    },2000)
}

let profile = (callbackk)=>{
    setTimeout(()=>{
        console.log("Creating default profile");
        callbackk();
    })
}
let Welcome = (callbackk) =>{
    setTimeout(()=>{
        console.log("Welcome");
        callbackk();
    })
}
saveUser(function(){
    email(function(){
        profile(function(){
           Welcome(function(){
            console.log("All Done")
           })
        })
    })
})




let store = (callback)=>{
   let internet = (Math.floor(Math.random() * 10) +1)
   if(internet > 5){
    console.log("Data is saved")
    callback();
   } else{
    console.log("Data is Unsaved")
   }
}
store(()=>{
    console.log("Name is saved")
    store(()=>{
        console.log("Age is saved")
        store(()=>{
            console.log("Your academic information is saved")
        })
    })
})