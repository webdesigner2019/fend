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


// navi is assigned as global var
const navi = document.getElementById('navbar__list');
// sections is assigned as another  global var
const sections = document.querySelectorAll('section');


// build the nav

const navCreate = () => {

    let nav = '';
    //  loop on all four sections 
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        nav += `
            <li id="${sectionID}Link">
                <a class="menu__link" href="#${sectionID}">${sectionDataNav}</a>
            </li>
        `;
    });
    
    //append all elements to the nav bar
    navi.innerHTML = nav;
};
navCreate();

// This function grabs the top and bottom border of the section so we know where the
// section starts and ends
const sectionBounds = (section) => {
    const sectionBorders = section.getBoundingClientRect();
    return {
        top: Math.floor(sectionBorders.top),
        bottom: Math.floor(sectionBorders.bottom)
    }
};

const activateSection = (sectionID) => {
    const navbarLink = document.querySelector(`#navbar__list li#${sectionID}Link`);
    navbarLink.classList.add('active-link');
};

const deactivateSection = (sectionID) => {
    const navbarLink = document.querySelector(`#navbar__list li#${sectionID}Link`);
    navbarLink.classList.remove('active-link');
};

// this function checks whether the user is within the section
const isUserInSection = (sectionID, bounds) => {
    if (bounds.top <= 0 && bounds.bottom > 0) {
        // the user is inside the section
        activateSection(sectionID);
    } else {
        // they are not
        deactivateSection(sectionID);
    }
}

// this function will handle adding and removing classes to navbar links
// according to where the user is on the website
const sectionActivate = () => {
    sections.forEach(section => {

        // {top: number, bottom: number}
        const bounds = sectionBounds(section);

        isUserInSection(section.id, bounds);

    });
};

// adding event listener when scrolling

window.addEventListener('scroll', sectionActivate);


