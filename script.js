const bar = document.querySelector('.nav__bar');
const equis = document.querySelector('.menu_equis');
const menu = document.querySelector('.nav_menu');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.menu-link');
const main = document.querySelector('.main');
const mediaQueryList = window.matchMedia("screen and (max-width: 900px)");
const mainBoxImg = document.querySelector('.main__box-image');

if(mediaQueryList.matches) {
    mainBoxImg.src="images/image-hero-mobile.png";
} else {
    mainBoxImg.src="images/image-hero-desktop.png";
}
bar.addEventListener("click", () => {
    nav.classList.add('--active-mobile');
    main.classList.add('--active-bg');
});

equis.addEventListener("click", () => {
    nav.classList.remove('--active-mobile');
    main.classList.remove('--active-bg');
});

window.onresize = () => {
    nav.classList.remove('--active-mobile');
    links.forEach(link => {
        link.parentElement.parentElement.classList.remove('--active-link');
    })
    nav.classList.remove('--active-mobile');
    main.classList.remove('--active-bg');

    if(mediaQueryList.matches) {
        mainBoxImg.src="images/image-hero-mobile.png";
    } else {
        mainBoxImg.src="images/image-hero-desktop.png";
    }

};

links.forEach(link => {
    link.addEventListener("click", (e) => {
        link.parentElement.parentElement.classList.toggle('--active-link');
    })
})