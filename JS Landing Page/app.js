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
 //object.onscroll = "section__container"(this.#home)
 //{myScript};

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


function mouseEnter() {
    document.getElementById("#home").style.color = "pink";  
}
function mouseLeave() {
    document.getElementById("#home").style.color = "black";
}
  
        
//listening for scrolling




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
//document.getElementById("home").addEventListener("scroll," ,myFunction)

//function myFunction() {
    //document.getElementById("section_container").innerHTML = "TAH DAH"
//}

//event listeners for each section 

/**
 * End Main Functions
 * Begin Events */
console.log('ahhhhhhhh')
document.getElementById("firstbutton").addEventListener("click", function() {
    console.log('the first button was clicked')
    document.getElementById('home').scrollIntoView()
})
document.getElementById('secondbutton').addEventListener("click", function() {
    document.getElementById('sectionone').scrollIntoView()
})
 document.getElementById('thirdbutton').addEventListener("click", function() {
     document.getElementById('sectiontwo').scrollIntoView()
 })
  document.getElementById('fourthbutton').addEventListener("click", function() {
      document.getElementById('sectionthree').scrollIntoView()
  })
document.getElementById('fifthbutton').addEventListener("click", function() {
    document.getElementById('sectionfour').scrollIntoView()
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
