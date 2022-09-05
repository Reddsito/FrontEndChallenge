const menuBar = document.querySelector('.menu-bar'),
menu = document.querySelector('.links'),
backProject = document.querySelector('#TittleButton'),
bookmark = document.querySelector('#Bookmark'),



overlay = document.querySelector('.overlay'),
closeProject = document.querySelector('#CloseProject'),
donationButton = document.querySelectorAll('.donation-button'),
donationLeft = document.querySelectorAll('.amount-left'),

mainProject = document.querySelector('#MainProject'),
inputsRadio = document.querySelectorAll('.input-radio'),
buttonProjects = document.querySelectorAll('.button-project'),
projectLeft = document.querySelectorAll('.project-left h3'),

sectionThanks = document.querySelector('#MainThanks'),
internationalNumberFormat = new Intl.NumberFormat('en-US');
let moneyNumbers = 0;
let moneyActual = document.querySelector('#Money');
let Backers = document.querySelector('#Backers');
let barWidth = document.querySelector('.bar-absolute');



moneyActual.innerText = "$" + internationalNumberFormat.format(50000);
moneyNumbers = parseInt(moneyActual.innerText.replace(/[^0-9]+/g, ""));
barWidth.style.width = (100 * moneyNumbers / 100000) + "%"

donationLeft.forEach(left => {
    if(left.innerText == 0){
        left.parentElement.parentElement.parentElement.classList.add('--left')
    } else {
        left.parentElement.parentElement.parentElement.classList.remove('--left')
    }
})

projectLeft.forEach(left => {
    if(left.innerText == 0){
        left.parentElement.parentElement.classList.add('--left')
    } else {
        left.parentElement.parentElement.classList.remove('--left')
    }
})



backProject.addEventListener('click', () => {
    mainProject.classList.toggle("--activeProject");
    overlay.classList.toggle('--activeOverlay');
    window.scrollTo(0, 90);
})

bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('--activeBookmark')
})

closeProject.addEventListener('click', () => {
    mainProject.classList.toggle('--activeProject');
    overlay.classList.toggle('--activeOverlay');

    inputsRadio.forEach( input => {
        input.checked = false;
        input.parentNode.parentNode.parentNode.parentNode.classList.remove("--activeBox");
    })
    
})

donationButton.forEach( button => {
    button.addEventListener('click', (e) => {
        mainProject.classList.toggle("--activeProject");
        overlay.classList.toggle('--activeOverlay');
        window.scrollTo(0, 90);
    })
})

inputsRadio.forEach(input => {

    input.addEventListener('change',() =>{
        inputsRadio.forEach(input2 => {

            if(input2.checked){
                input.parentNode.parentNode.parentNode.parentNode.classList.toggle("--activeBox");

            

            } else {
                input2.parentNode.parentNode.parentNode.parentNode.classList.remove("--activeBox");

            }

        })
    })
})

buttonProjects.forEach(button => {

    button.addEventListener('click', () =>{

        if (parseInt(button.previousElementSibling.value) >= parseInt(button.previousElementSibling.getAttribute('data-money'))) {
            mainProject.classList.toggle('--activeProject');
            sectionThanks.classList.toggle('--activeThanks')
            
            if(button.parentElement.parentElement.parentElement.parentElement.querySelector('.project-tittle .project-left h3')) {
                let leftDonation = button.parentElement.parentElement.parentElement.parentElement.querySelector('.project-tittle .project-left h3').innerText -= 1;

            donationLeft.forEach(left => {
  
                if(left.getAttribute('data-money') == button.previousElementSibling.getAttribute('data-money')) {
                
                left.innerText = leftDonation;

                }
            })
            }
            

            moneyNumbers += parseInt(button.previousElementSibling.value);
            moneyActual.innerText = "$" + internationalNumberFormat.format(moneyNumbers);
            
            
            let BackersInt = parseInt(Backers.innerText.replace(/[^0-9]+/g, ""));

            BackersInt += 1;
            Backers.innerText = internationalNumberFormat.format(BackersInt);

            button.previousElementSibling.value = "";
            barWidth.style.width = (100 * moneyNumbers / 100000) + "%"

        } else {
            button.parentElement.parentElement.parentElement.lastElementChild.classList.add('--activeError');
        }
    })

})

sectionThanks.lastElementChild.addEventListener('click', () => {
    overlay.classList.toggle('--activeOverlay');
    sectionThanks.classList.toggle('--activeThanks');

    inputsRadio.forEach( input => {
        input.checked = false;
        input.parentNode.parentNode.parentNode.parentNode.classList.remove("--activeBox");
    })

    buttonProjects.forEach( button => {
        button.parentElement.parentElement.parentElement.lastElementChild.classList.remove('--activeError');
    })

    donationLeft.forEach(left => {
        if(left.innerText == 0){
            left.parentElement.parentElement.parentElement.classList.add('--left')
        } else {
            left.parentElement.parentElement.parentElement.classList.remove('--left')
        }
    })

    projectLeft.forEach(left => {
        if(left.innerText == 0){
            left.parentElement.parentElement.classList.add('--left')
        } else {
            left.parentElement.parentElement.classList.remove('--left')
        }
    })
})

menuBar.addEventListener('click', () => {
    menu.classList.toggle('--activeMenu');
    overlay.classList.toggle('--activeOverlay');
    console.log(menuBar.firstElementChild);
    if(menu.classList.contains('--activeMenu')) {
        menuBar.firstElementChild.src = 'images/icon-close-menu.svg'
    } else {
        menuBar.firstElementChild.src = 'images/icon-hamburger.svg'
    }
})

