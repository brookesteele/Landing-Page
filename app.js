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
const navbar = document.querySelector('#navbar__list');
const allSections = document.querySelectorAll('section');



 /* End Global Variables
  Start Helper Functions */




/**
 * End Helper Functions
 * Begin Main Functions */
 object.onscroll = function()
 {myScript};

 function myFunction() {
     document.getElementById().innerHTML = "you scrolled on the landing page!"
 }

// build the nav
const section = document.querySelectorAll("section");
const ul = document.querySelector("navbar__list");

const navbarbuilder = () => {
    for (let i = 0; i < section.length; i++) {
        const listelement= elementCreater("li");
        const linkelement= elementCreater("a", {"href":
    #section${i + 1}''});
    linkelement.className ="menu__link";
    linkelement.textContent = section ${i+1};
    listelement.appendChild(linkelement);
    ul.appendChild(listelement);

    } 
};

//load navbar function 
window.addEventListener("DOMContentLoaded", navbarbuilder);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
<p><a id="myAnchor" href="http://127.0.0.1:5500/landingpage.html">Landing page</a></p>

/**
 * End Main Functions
 * Begin Events */
document.addEventListner('click', function () { 
    console.log('the page was clicked');
})
// Build menu 

// Scroll to section on link click
var scroll = document.getElementById("content");

function scrollToTop() {
    scroll.scrollIntoView(true); //Top
}

function scrollToBottom() { 
    scroll.scrollIntoView(false); //Bottom
}

// Set sections as active


