// el

let galleryTitles = document.getElementsByClassName("gallery-title")
let productCardContainer = document.querySelector(".product-card-container")
let galleryCardContainers = document.getElementsByClassName("gallery-card-container")

let handler = document.querySelector(".handler")






const IOcallback = (entries, observer) => {

entries.forEach(entry => {
    if (entry.isIntersecting) {
        console.log(entry.target)

        entry.target.classList.add("intersect")
    }

});
};

const observer = new IntersectionObserver(IOcallback, {root: handler, threshold: 0.2});


for (let el of galleryTitles) {
    observer.observe(el)
}

for (let el of galleryCardContainers) {
    observer.observe(el)
}


observer.observe(productCardContainer)





// navbar

handler.addEventListener("scroll", (e)=> {
    e.target.classList.toggle("scrolled", e.target.scrollTop > 0)
    
})



// carousel

let slide1 = document.getElementById("slide-1")
let slide2 = document.getElementById("slide-2")
let slide3 = document.getElementById("slide-3")

let slides = [slide1, slide2, slide3]

let index = 0

setInterval(() => {
    
    if (index < slides.length ) {
        // console.log(index)

        const currSlide = slides[index]

        currSlide.parentNode.scroll(
            {
                left: currSlide.offsetLeft,
                behavior: "smooth"
            }
        )

        index += 1

    } else {
        index = 0
    }

}, 10000)