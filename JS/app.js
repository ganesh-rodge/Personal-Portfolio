function toggleMenu(){
    const nav = document.querySelector("#navlinks");
    nav.classList.toggle('active');
}

function toggleHighlight(){
    const highl = document.querySelectorAll(".high");

    highl.forEach(element=>{
        element.classList.toggle('highlight');
    });

    const highButton = document.querySelector(".highlight-button");

    highButton.classList.toggle('highlight-toggle');

    const hCircle = document.querySelector(".circle");
    hCircle.classList.toggle('changeCircle');
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add or remove the active class based on scroll position
function animateSkills() {
    const logos = document.querySelectorAll('.skillhub .logo');

    logos.forEach((logo) => {
        if (isElementInViewport(logo)) {
            logo.classList.add('active'); // Add the class to animate when in view
        } else {
            logo.classList.remove('active'); // Remove the class when out of view (scrolling up)
        }
    });
}

// Trigger the animation on scroll
window.addEventListener('scroll', animateSkills);

// Initial call in case some elements are in view on page load
animateSkills();

// Function to animate sentences on scroll
function animateSentences() {
    const sentences = document.querySelectorAll('.sen');
    sentences.forEach((sentence, index) => {
        setTimeout(() => {
            sentence.classList.add('active');
        }, index * 300); // Delay animation for each sentence
    });
}

// Call animation function on load
window.onload = animateSentences;
