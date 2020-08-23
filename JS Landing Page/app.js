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
function myFunction 
for (const section of sections) {
    const box = section.getBoundingClientRect();
    if(box.top <= 150 && box.bottom >= 150{
        section.classList.add('your-active-class');
    }else{
        section.classList.remove('your-active-class');
    }
    }
};


//event listeners 
const clickPage = document.querySelector('body');
clickPage.addEventListener('click', function () {

});

//view state as active


//section events 

