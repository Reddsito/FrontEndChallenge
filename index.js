const numbers = document.querySelectorAll('.number'),
operators = document.querySelectorAll('.operator'),
reset = document.querySelector('.reset'),
erase = document.querySelector('.erase'),
displayPrevious = document.querySelector('.display-previous'),
displayActual = document.querySelector('.display-actual'),
display = new Display(displayPrevious, displayActual),
range = document.querySelector('#Range'),
body = document.querySelector('body');
body.className = '';
numbers.forEach(n => {
    n.addEventListener('click',(e) => {
     let num =  e.target.textContent;
     display.addNumber(num);
    })
})

reset.addEventListener('click', () => {
    display.resetAll();
})

erase.addEventListener('click', () => {
    display.eraseActual();
})

operators.forEach(o => {
    o.addEventListener('click', (e) => {
        let ope =  e.target.textContent;
        let val = e.target.value;
        display.calculate(ope,val);
    })
})

range.addEventListener('change', (e) => {
    if(e.target.value == 1) {
        body.className = '';
    } else if (e.target.value == 2 ) {
        body.className = '';
        body.classList.add('theme2')
    } else {
            body.className = '';
            body.classList.add('theme3')
      
    }
})