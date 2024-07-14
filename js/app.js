/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
let result = '';

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function makeActive() {
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sec = section.getBoundingClientRect();
        if (sec.top <= window.innerHeight / 2 && sec.bottom >= window.innerHeight / 2) {
            section.classList.add('your-active-class');
            links[i].classList.add('active'); // Add active class to the nav link
        } else {
            section.classList.remove('your-active-class');
            links[i].classList.remove('active'); // Remove active class from the nav link
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the navigation
for (let i = 0; i < sections.length; i++) {
    result += `<li><a class="menu__link" href="#section${i+1}">Section ${i+1}</a></li>`;
}
document.querySelector("#navbar__list").innerHTML = result;

// Select navigation links after they have been added to the DOM
const navLinks = document.querySelectorAll('.menu__link');
let links = Array.from(navLinks);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', makeActive);

// Scroll to anchor ID using scrollIntoView event
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
        e.preventDefault();
        const sectionId = links[i].getAttribute("href");
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Toggle read more/less content
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        if (buttons[i].textContent == "Read More") {
            buttons[i].previousElementSibling.classList.remove("read-more");
            buttons[i].textContent = "Read Less";
        } else {
            buttons[i].previousElementSibling.classList.add("read-more");
            buttons[i].textContent = "Read More";
        }
    };
}
