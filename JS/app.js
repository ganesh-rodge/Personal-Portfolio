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

