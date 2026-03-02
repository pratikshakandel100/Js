// Task 1
// TASK 1 — CLICK EVENT (Medium)
//  Goal:
// When the user clicks Submit button:
// Prevent form from reloading.
// Check if all required fields are filled.
// If any field is empty → show alert "Please fill all fields"
// If everything is filled → show alert "Form submitted successfully"

let btn = document.querySelector("button");
// let i = document.querySelectorAll("input")

let name = document.getElementById("name");
let email = document.getElementById("email")
let password = document.getElementById("password");
let country = document.getElementById("country");


btn.addEventListener("click", (e) => {
     e.preventDefault();
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let hobbies = document.querySelector('.checkbox-group input[type="checkbox"]:checked')
    let selected = country.options[country.selectedIndex].value;
    
   
    if (name.value == '' || email.value == '' || password.value == '' || selected.value == '' || gender.value == '' || hobbies.value === '') {
        alert("Please fill the form correctly")
    } else {
        alert("Form submitted successfully")
    }
    console.log(gender)
    console.log(hobbies)
})