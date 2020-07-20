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


 
 * Begin Main Functions */
 object.onscroll = "section__container"(this.#home)
 {myScript};

 function section__container() {
     document.getElementById("section__container").addEventListener
     ("scroll", section__container);

     function section__container() {

        document.getElementById("home").innerHTML = "you scrolled on the landing page!"
     }
 }

// build the nav
var dynamicnav = []
dynamicnav = ["home", "sectionone", "sectiontwo", "sectionthree", "sectionfour"];

//nav container
var container = document.getElementById("dynamicnav");
 
//function definition 
function createDynamicNavbar(){
}
//create unordered list
var navList = document.createElement("ul");
navList.className ="unorderedlist";
for(var i=0;i<listLength;i++){
    var listItem = document.createElement("li");
    listItem.appendChild(listValue);
    navList.appendChild(listItem);
}

// I'm trying to change the color of the each button when you hover the curser over it 
const ul = document.querySelector("navbar__list");
const section = document.querySelectorAll("section");



document.getElementById("#home").addEventListner("mouseenter", mouseEnter);
document.getElementById("#home").addEventListner("mouseleave", mouseLeave);

function mouseEnter() {
    /*var x = document.getElementById("navbar").rows[0.cells;]*/ 
    document.getElementById("#home").style.color = "pink";  
}
function mouseLeave() {
    document.getElementById("#home").style.color = "black";
}
  
        
//listening for scrolling
window.addEventListener("scroll");


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events */
document.addEventListner('click', function () { 
    console.log('the page was clicked');
})
// Build menu 


// Set sections as active*/
const addActiveClass =(section__container) => {
    section__container.class.addActiveClass("active");
    
}

//remove active sections
const removeActiveClass =(section__container) => {
    section__container.removeActiveClass("active");
}