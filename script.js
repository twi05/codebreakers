const hamburger = document.getElementById("hamburger");

const navUl = document.getElementById("nav-items");
const all = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", () => {
    console.log("asdf");
    navUl.classList.toggle("show");
    // hamburger.style.backgroundColor = "green";
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
    shrinknav();
    navhide();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//For shrinking of Navbar

// window.onscroll = function() { shrinknav() };

function shrinknav() {
    if (
        document.body.scrollTop > 850 ||
        document.documentElement.scrollTop > 850
    ) {
        // document.getElementsByClassName("nav-item").style.padding = "30px 10px";
        document.getElementById("logo").style.height = "3rem";
        console.log("shrink nav");
    } else {
        // document.getElementById("navbar").style.padding = "80px 10px";
        document.getElementById("logo").style.height = "4.2rem";
    }
}

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

function navhide() {
    if (
        document.body.scrollTop > 1600 ||
        document.documentElement.scrollTop > 1600 || document.body.scrollTop > 1800 ||
        document.documentElement.scrollTop > 1800
    ) {
        // document.getElementsByClassName("nav-item").style.padding = "30px 10px";
        document.getElementById("nav-items").style.visibility = "hidden";
        console.log("Navbaar");
    } else {
        // document.getElementById("navbar").style.padding = "80px 10px";
        document.getElementById("nav-items").style.visibility = "visible";
        // document.getElementsByClassName("header").style.visibility = "auto";
    }
}

const modal = document.getElementsByClassName("modal")
modal.addEventListener("click", () => {
    console.log("bottons clicked");
    document.getElementsByClassName("contact-modal").classList.toggle("modal-show");
    // hamburger.style.backgroundColor = "green";
});

AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-quad',
    delay: 100,
});