/* ==========================================
   SANDY ACADEMY BARBER
   SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Header berubah saat scroll
    // ==========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.style.background = "rgba(0,0,0,.95)";
            header.style.padding = "12px 8%";
        } else {
            header.style.background = "rgba(0,0,0,.70)";
            header.style.padding = "18px 8%";
        }

    });

    // ==========================
    // Fade Up Animation
    // ==========================

    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    items.forEach(item=>{

        observer.observe(item);

    });

});

/* ==========================================
   COUNTER PROMO
========================================== */

let kuota = 10;

const kuotaElement = document.getElementById("kuota");

if (kuotaElement) {
    kuotaElement.innerText = kuota;
}

/* ==========================================
   SMOOTH SCROLL MENU
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================
   FLOATING BUTTON EFFECT
========================================== */

const waButton = document.querySelector(".floating-wa");

if(waButton){

    setInterval(()=>{

        waButton.style.transform="scale(1.08)";

        setTimeout(()=>{

            waButton.style.transform="scale(1)";

        },500);

    },3000);

}

/* ==========================================
   GALLERY HOVER
========================================== */

document.querySelectorAll(".gallery-item img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.filter="brightness(110%)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.filter="brightness(100%)";

    });

});

console.log("Sandy Academy Barber v1.0 Loaded");

/*=========================
FULLSCREEN SLIDER
==========================*/

const slides=document.querySelectorAll(".slide");

const dots=document.querySelectorAll(".dot");

let current=0;

function showSlide(i){

slides.forEach(s=>s.classList.remove("active"));

dots.forEach(d=>d.classList.remove("active"));

slides[i].classList.add("active");

dots[i].classList.add("active");

}

function nextSlide(){

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

}

setInterval(nextSlide,4000);

document.querySelector(".next").onclick=()=>{

nextSlide();

};

document.querySelector(".prev").onclick=()=>{

current--;

if(current<0){

current=slides.length-1;

}

showSlide(current);

};

dots.forEach((dot,index)=>{

dot.onclick=()=>{

current=index;

showSlide(current);

};

});
