// el

let items = document.querySelectorAll(".gallery-card, .gallery-title, .product-card") // get all elements to be "observed" 
let handler = document.querySelector(".handler")



const IOcallback = (entries, observer) => { // this is the callback function for the intersection observer, this adds "intersect" classname to the element when it is ready in the page

entries.forEach(entry => {
    if (entry.isIntersecting) {

        entry.target.classList.add("intersect")
    }

});
};

const observer = new IntersectionObserver(IOcallback, {root: handler, threshold: 0.5}); 

for (let el of items) {
    observer.observe(el)
}


// navbar


handler.addEventListener("scroll", (e)=> { 

    // toggles a "scrolled" css classname to the navbar to change its style when the page is scrolled down
    e.target.classList.toggle("scrolled", e.target.scrollTop > 0)
    
})
