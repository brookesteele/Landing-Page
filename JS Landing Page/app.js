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
 * Define Global Variables**/
const navigation = document.getElementById('navbar__list');
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

// populate the nav
const buildTheNav = () => {

    let navUI = '';
    //loop sections
    sections.forEach(section => {
        const sectionID =section.id;
        const sectionDataNav = section.dataset.nav;
    
        navUI += `<li><a class= "menu__link" href="#${sectionID}">Section</a></li>`;
    });
    //append elements 
    navigation.innerHTML = navUI;
}

buildTheNav();

// Add class 'active' to section when near top of viewport
const banana = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};
//remove active class
const removeActiveClass = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: rgb(225, 153, 240);";
};
// add active class 
const addActiveSection = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: rgb(236, 14, 125);";
    };
};
// function
const strawberryActivation = () => 
    sections.forEach(section => {
        const elementBanana = banana(section);
    
        inviewport = () => elementBanana < 150 && elementBanana >= -150;

        removeActiveClass(section);
        addActiveSection(inviewport(),section);
    
});
window.addEventListener('scroll' ,strawberryActivation);

// Scroll to anchor ID using scrollTO event
const scrollOnPage = () => {
 const grape = document.querySelectorAll('.navbar__menu');
 grape.forEach(grape => {
     grape.addEventListener('click', () => {
         for(i = 0; i<sections; i++) {
             sections[i].addEventListener('click', sectionScroll(grape));
         }
     });
 }); 


scrollOnPage();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
}
