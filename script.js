/** Button de busca */

ButtonSearch = document.getElementById("search");

InputSearch = document.querySelector("input");

ButtonAccount = document.getElementById("user")

OptionAccount = document.getElementById("account");



ButtonSearch.onclick = () => {
    InputSearch.classList.toggle("active");
    ButtonSearch.classList.toggle("ativo");

}

ButtonAccount.onclick = () => {
    OptionAccount.classList.toggle("ative");
}

/** preload */

var loader = document.querySelector('.loading-screen')

window.addEventListener("load", function(){
    
    setInterval(() => {
        loader.style.display = "none";
    }, 900)
})



/** Slider vertical About */

const sliderContainer = document.querySelector(".more-about");

const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slidesLength = slideLeft.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength -1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const slideHeight = sliderContainer.clientHeight;
    if(direction == 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength -1){
            activeSlideIndex = 0;
        }
    }else if(direction == 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;

}

/**final do slider vertical */

/** read More About */

readMore = document.getElementById('readMore')

More = document.querySelector('.more-about')

const close = document.querySelector('#close')

readMore.addEventListener('click', ()=> {
    More.classList.toggle('show')
})

close.onclick = ()=> {
    More.classList.remove('show')
}

/* === button to top === */
const backToTopButton = document.querySelector('.button-to-top');
const navHegiht = header.offsetHeight;

function  backToTop(){
    if(window.scrollY >= navHegiht){
        // scroll é maior que a altura do header
        backToTopButton.classList.add('show-button')
    } else {
        // menor que a altura do header
        backToTopButton.classList.remove('show-button')
    
 }
}

/** fechar o menu quando clicar em um item */

const links = document.querySelectorAll('header nav ul li a')

for (const link of links){
    link.addEventListener('click', () => navbar.classList.remove('toggle'))
}


/* menu scroll bar **/

const MenuButton = document.querySelector('#menu-bar');
const headerHegiht = header.offsetHeight;

function  ShowMenu(){
    if(window.scrollY >= headerHegiht){
        // scroll é maior que a altura do header
        MenuButton.classList.add('scroll');

    } else {
        // menor que a altura do header
        MenuButton.classList.remove('scroll');

 }
}

/** final scroll bar */

const navbar = document.querySelector('.nav');

MenuButton.addEventListener("click", () => {
    navbar.classList.toggle('toggle');
})

/* Create account */

const CreateAccount = document.querySelector('#create');

const PageCreateAccount = document.querySelector('.create-account');

const closer = document.querySelector('#closer')


CreateAccount.onclick = () => {
    PageCreateAccount.classList.add('showAccount')
    PageSingAccount.classList.remove('showSing')
    navbar.classList.remove('toggle');

}

closer.onclick = () => {
    PageCreateAccount.classList.remove('showAccount')

}

/* Sing account */

const SingAccount = document.querySelector('#Sing');

const PageSingAccount = document.querySelector('.sing-account');

const fechar = document.querySelector('#fechar')


SingAccount.onclick = () => {
    PageSingAccount.classList.add('showSing')
    PageCreateAccount.classList.remove('showAccount')

}

fechar.onclick = () => {
    PageSingAccount.classList.remove('showSing');

}


/** options menu */

const Disher = document.getElementById('dishers');

const PageAllDisher = document.getElementById('all-Disher')

const CloseAllDisher = document.querySelector('#closeAllDisher')



Disher.onclick = () => {
    PageAllDisher.classList.add('ShowAllDisher')
}
CloseAllDisher.onclick = () => {
    PageAllDisher.classList.remove('ShowAllDisher')
}


window.addEventListener('scroll', function () {
    backToTop()
    ShowMenu()
  })
