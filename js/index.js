// el
let wrapper = document.getElementById(".slide-wrapper")
let sections = document.querySelectorAll(".slide")





window.addEventListener("scroll", ()=> {
    let navbar = document.querySelector(".navbar")

    navbar.classList.toggle("stick-top-navbar", window.scrollY > 0)
    
})


let IOoptions = {
    root: wrapper,
    threshold: 0.9,
  };




const IOcallback = (entries, observer) => {

entries.forEach(entry => {
    if (entry.isIntersecting) {

        for (let child of entry.target.children) {

            child.classList.add("animate-left-fade-in")
        }
        console.log(entry)
    }
});
};

const myObserver = new IntersectionObserver(IOcallback, IOoptions);

let target = document.getElementById("#fpSection");

sections.forEach(el => {
    myObserver.observe(el)
})

