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
const navbar = document.getElementById("navbar__list");
const allSections = document.querySelectorAll('section');
const unorderedList = document.getElementsByTagName("li");
/* End Global Variables*/

//populate the navbar
function createNav(){
    for (let item of allSections){
        let menuitem = document.createElement("li");
        let menuitem = document.createElement("a");
        menuitem.className="menu__link";
        menuitem.dataset.nav=item.id;
        menuitem.innerText=item.dataset.nav;

        // adding click even listener on Nav link
        menuitem.addEventListener('click', function () {
            item.scrollIntoView({behavior: "smooth"})
        })
        navbar.appendChild(menuitem);
        //add ID
        menuitem.id = sectionTitle;
        menuitem.className = "navBar_list"
        //add href
        menuitem.appendChild(menuitem)
        navbar.appendChild(menu);
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


//event listeners 
const clickPage = document.querySelector('body');
clickPage.addEventListener('click', function () {

});

//view state as active
let inView = function (section) {
    let box = section.getBoundingClientRect();

    return(
        box.top >= 0 &&
        box.left >= 0 &&
        box.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        box.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
}

//section events 

