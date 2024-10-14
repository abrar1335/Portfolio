// navbar
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', function () {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
});


// scroll bar

let left_icon = document.getElementById('left_icon');
let right_icon = document.getElementById('right_icon');
let cards = document.getElementById('cards');

function scroll(){
    right_icon.addEventListener('click' , ()=> {
    cards.scrollBy({
        left: 270,
        behavior: 'smooth',
    });
})

left_icon.addEventListener('click' , ()=> {
    cards.scrollBy({
        left:-270,
        behavior:'smooth',
    });

})
}
scroll()


