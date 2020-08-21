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
 * Define Global Variables */
const box = document.querySelector("div.landing__container");
const rect = landing__container.getBoundingClientRect();
console.log(rect);
/* End Global Variables*/


 //populate the navbar
const navbar = document.getElementById('navbar__list');

const allSections = document.querySelectorAll('section');

function createNav(){
    for (let item of allSections){
        let menuitem = document.createElement("li");
        menuitem.className="menu__link";
        menuitem.dataset.nav=item.id;
        menuitem.innerText=item.dataset.nav;

        // addingclick even listenr on Nav link
        menuitem.addEventListener('click', function () {
            item.scrollIntoView({behavior: "smooth"})
        })
        navbar.appendChild(menuitem);
    }

    createNav()
    // Set sections as active*/
const addActiveClass = (navbar__menu) => {
	section__container.class.addActiveClass("active");
};
//remove active sections
const removeActiveClass = (navbar__menu) => {
	section__container.removeActiveClass("active");
};


//view state as active

