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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section"); //Get the sections
const fragment = document.createDocumentFragment();
const list = document.getElementById("navbar__list");
//End Global Variables
//Start Helper Functions




/**
 * End Helper Functions
 * Begin Main Functions
 * A

// build the nav
*/
for (let section of sections) // Loop on the sections
{
    const newLiElement = document.createElement("li"); // Create an item for the list
    const newAElement = document.createElement("a");   // Create a link for each item in the list
    const sectionTitle = section.getAttribute("data-nav"); // Get the title of each section
    newAElement.textContent = sectionTitle; // Title genealogy for each element link
    const sectionId = section.getAttribute("id"); // Get the ID of each item in the list
    newAElement.classList.add("menu__link"); // Add a menu design
    newAElement.href = `#${sectionId}`; // Connect the sction with a link
    newLiElement.appendChild(newAElement); // Add a to li element
    fragment.appendChild(newLiElement); // Add li to fragment

    // build tne scroll smoth func
    newAElement.addEventListener("click", evenT =>
    {
        evenT.preventDefault();
        section.scrollIntoView({'behavior': 'smooth'});
    });

}
// Add fragment to list(nav)
list.appendChild(fragment)

// Add class 'active' to section when near top of viewport

const links = document.querySelectorAll("a.menu__link")// Menu design recall
window.addEventListener("scroll", function () // listener func
{
    // loop each section on sections
    for (let section of sections)
    {
        let sectionReact = section.getBoundingClientRect().top; 
        const sectionTitle = section.getAttribute("data-nav"); // Get the title of each section
        section.classList.remove("your-active-class");
        // A condition to know whether the element is within the borders of the screen or not
        if (sectionReact > 0 && sectionReact < 250)
        {
            section.classList.add("your-active-class")
            // loop on links
            for(let link of links)
            {
                if (link.textContent === sectionTitle)
                {
                    link.classList.add("active-link")
                }
                else{
                    link.classList.remove("active-link")
                }
            }
        }
    }
})
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


