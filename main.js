// function scrollToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     section.scrollIntoView({ behavior: 'smooth' });
// }

/*toggle icon navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-solid fa-x');
    navbar.classList.toggle('active')
}


/*scroll section active link */

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsecHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };
    });


    /*sticky navbar */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    /*remove toggle icon and navbar */
    menuIcon.classList.remove('fa-solid fa-x');
    navbar.classList.remove('active');

};


/*scroll reveal */

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button'});
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


/*Typed JS*/
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Frontend Developer', 'Software Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});