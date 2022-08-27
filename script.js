const inputs = document.querySelectorAll('.inputs');
const text = document.querySelector('#text');
const form = document.querySelector('#form');
const box = document.querySelector('#box');

inputs.forEach(input => {
    input.addEventListener("click",  () => {
        inputs.forEach(input2 => {
            if(input2.checked) {
               input2.parentElement.classList.add("--active")
               text.textContent = `You selected ${input2.previousElementSibling.textContent}  out of 5`;
            } else {
                input2.parentElement.classList.remove("--active")
            }
        })
            
    })
});

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(text.textContent == ""){
        alert("Select an option before sending...")
    } else {
        box.classList.add("box--hide");
    }
        
})

