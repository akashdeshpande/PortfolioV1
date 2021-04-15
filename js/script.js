( () => {
    //get hamburger and navLinks
    const ham = document.getElementById('hamburgerMenu');
    const nav = document.getElementById('navLinks');

    // set onClick on hamburger to trigger navLinks class showNavLinks
    ham.addEventListener('click', () => {
        nav.classList.toggle('showNavLinks');
    })
})();