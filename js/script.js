AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 20) {
        nav.classList.add('color');
    } else {
        nav.classList.remove('color')
    }
}
)
