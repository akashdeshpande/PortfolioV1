( () => {
    // get hamburger and navLinks
    const ham = document.getElementById('hamburgerMenu');
    const nav = document.getElementById('navLinks');

    // set onClick on hamburger to trigger navLinks class showNavLinks
    ham.addEventListener('click', () => {
        nav.classList.toggle('showNavLinks');
    })

    // test to see if navlinks close on clicking
    navLinks.addEventListener('click', () => {
        nav.classList.remove('showNavLinks');
    })

    
    // for auto highlight menu
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.navLink');

    window.addEventListener('scroll', () => {
        let currentSection = "";

        // loop over for each section
        sections.forEach ( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }
        })

        navLi.forEach (li => {
            li.classList.remove('selectedNavLink');
            if(li.classList.contains(currentSection)) {
                li.classList.add('selectedNavLink');
            }
        });

    });
})();