/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
    // Resources 
const resources = [
    {
        title: "Syllabus.pdf",
        img: "/assets/img/syllabus.png",
        pdfPath: "/assets/pdfs/MBA Syllabus R25.pdf"
    },
    {
        title: "SDA Lab.pdf",
        img: "/assets/img/SDA Lab.png",
        pdfPath: "/assets/pdfs/SDA Lab Record.pdf"
    }
    // To add more, just comma-separate a new { } block here!
];

// 2. Select the grid container
const pdfGrid = document.getElementById('pdf-list');

// 3. Generate and inject the HTML
pdfGrid.innerHTML = resources.map(resource => `
    <div class="pdf-card">
        <div class="pdf-preview">
            <img src="${resource.img}" alt="${resource.title} Preview">
            <div class="overlay">View PDF</div>
        </div>
        <div class="pdf-info">
            <h3>${resource.title}</h3>
            <a href="${resource.pdfPath}" download class="download-link">
                Download
            </a>
        </div>
    </div>
`).join('');


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
