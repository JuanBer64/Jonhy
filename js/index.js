var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 20) {
        nav.Classlist.add('bg-dark', 'shadow');
    } else {
        nav.classlist.remove('bg-dark', 'shadow')
    }

})

var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 20) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow')
    }
}
)


