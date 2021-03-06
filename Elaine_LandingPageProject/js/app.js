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
 * 
*/

/**
 * Define Global Variables
 * 
*/
//navigations global var
const navi = document.getElementById('navbar__list');
//sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navCreate = () => {

    let nav = '';
    //looping over all sections
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        nav += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    });
    
    //append all elements to the navigation
    navi.innerHTML = nav;
};
navCreate();

// Add class 'active' to section when near top of viewport

function makeActive () {
    for (const section of sectins) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bttom >= 150) {
            document.addEventListener("scroll",function (){
                makeActive();
            })
        } else {

        } 
    }
}
// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


