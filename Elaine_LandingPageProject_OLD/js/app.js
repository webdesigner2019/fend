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


//navi is assigned as global var
const navi = document.getElementById('navbar__list');
//sections is assigned as another  global var
const sections = document.querySelectorAll('section');

/*
 * End Global Variables
*/
// build the menu

const navCreate = () => {

    let nav = '';
    //  loop on all four sections 
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        nav += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    });
    
    //append all elements to the nav bar
    navi.innerHTML = nav;
};
navCreate();

// Add class 'active' to section when near top of viewport

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// set section as inactive
const rmvActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// set section as active
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: gray;";
    };
};

//implementating the actual function

const sectionActivate = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -130;

        rmvActive(section);
        addActive(inviewport(),section);
    });
};

// adding event listener when scrolling
window.addEventListener('scroll' ,sectionActivate);


