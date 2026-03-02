let form = document.getElementById("fullForm");
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = document.getElementById("name")
    let email = document.getElementById("email");
    let country = document.getElementById("country");
    let selected = country.options[country.selectedIndex].value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let hobbies = document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked');
    if(name.value == "" || name.value.length<3 || selected === "" || !gender || hobbies.length === 0){
        alert("Please fill the form correctly!")
    } else{
        alert("Form successfully submited")
    }
    console.log(name.value)
    console.log(email.value)
    console.log(Array.from(hobbies).map(h => h.value))
    
})