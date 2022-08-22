const form = document.querySelector("#form"),
inputs = document.querySelectorAll(".input"),
regExp = {
    cardholder: /^[a-zA-Z]{2,16}\s[a-zA-Z]{2,16}$/,
    cardnumber: /^\d{16}$/,
    month: /^[0-12]{1,2}$/,
    year:  /^[22-99]{2}$/,
    cvc:  /^[0-9]{3}$/
},
placeholders = {
    cardholder: false,
    cardnumber: false,
    month: false,
    year: false,
    cvc: false
},
numbercard = document.getElementById("displaynumbercard"),
namecard = document.getElementById("displaynamecard"),
months = document.getElementById("displaymonth"),
cvc = document.getElementById("displaycvc");


let display = new Display(numbercard,namecard,months,cvc);
const validate = (e) => {
        if(e.target.name == "month") {
            display.month.textContent = e.target.value + "/" + year.value; 
        }else if (e.target.name == "year"){
          
            display.month.textContent = month.value + "/" +e.target.value;
        } else {
            display[e.target.name].textContent = e.target.value; 
        }
           
    if(regExp[e.target.name].test(e.target.value)) {
        e.target.classList.remove("error--active");
        e.target.classList.add("border--active");
        placeholders[e.target.name] = true;
    } else {
        e.target.classList.add("error--active");
        placeholders[e.target.name] = false;
        e.target.classList.remove("border--active")
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(placeholders.cardholder && placeholders.cardnumber && placeholders.month && placeholders.year && placeholders.cvc) {
        form.classList.add("form--complete");
    }
})

inputs.forEach(input => {
    input.addEventListener("keyup", validate);
    input.addEventListener("blur", validate);
});