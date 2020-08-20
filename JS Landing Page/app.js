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
/* End Global Variables*/

 //populate the navbar
const navbar = document.getElementById('#navbar__list');

const allSections = document.querySelectorAll('section');

function createNav(){
    for (let item of allSections){
        let menuitem = document.createElement("li");
        menuitem.className="menu__link";
        menuitem.dataset.nav=item.id;
        menuitem.innerText=item.dataset.nav;
        navbarMenu.appendChild(menuitem);
    }

    createNav()
 
 * Begin Main Functions */

  
        
//listening for scrolling
// Add class 'active' to section when near top of viewport

/**
 * End Main Functions
 * Begin Events */
document.getElementById("firstbutton").addEventListener("click", function() {
    document.getElementById('section1').scrollIntoView({behavior: "smooth"})
})
document.getElementById('secondbutton').addEventListener("click", function() {
    document.getElementById('section2').scrollIntoView({behavior: "smooth"})
})
 document.getElementById('thirdbutton').addEventListener("click", function() {
     document.getElementById('section3').scrollIntoView({behavior: "smooth"})
 })
  document.getElementById('fourthbutton').addEventListener("click", function() {
      document.getElementById('section4').scrollIntoView({behavior: "smooth"})
  })

// Build menu 


// Set sections as active*/
const addActiveClass =(navbar__menu) => {
    section__container.class.addActiveClass("active");
    
}

//remove active sections
const removeActiveClass =(navbar__menu) => {
    section__container.removeActiveClass("active");
}
