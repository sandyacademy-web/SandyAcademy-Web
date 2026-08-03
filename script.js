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
