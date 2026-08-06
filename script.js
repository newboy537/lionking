/*======================================
  LIONKING PREMIUM SCRIPT
======================================*/

// ----------------------
// Copier le code promo
// ----------------------

const copyButton = document.getElementById("copyButton");
const promoCode = document.getElementById("promoCode");

function copyPromo() {

    navigator.clipboard.writeText("ALPHA42X");

    copyButton.innerHTML = "✅ Code copié";

    promoCode.style.transform = "scale(1.08)";

    setTimeout(() => {

        copyButton.innerHTML = "Copier le code";

        promoCode.style.transform = "scale(1)";

    },2000);

}

copyButton.addEventListener("click",copyPromo);
promoCode.addEventListener("click",copyPromo);


// ----------------------
// Apparition au Scroll
// ----------------------

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


// ----------------------
// Loader
// ----------------------

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},1000);

},1800);

});


// ----------------------
// Galerie Auto Scroll
// ----------------------

const gallery=document.querySelector(".gallery");

let direction=1;

setInterval(()=>{

if(!gallery) return;

gallery.scrollLeft+=1*direction;

if(gallery.scrollLeft+gallery.clientWidth>=gallery.scrollWidth){

direction=-1;

}

if(gallery.scrollLeft<=0){

direction=1;

}

},20);


// ----------------------
// Animation Cartes
// ----------------------

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


// ----------------------
// Effet Logo
// ----------------------

const logo=document.querySelector(".logo");

if(logo){

logo.addEventListener("mousemove",()=>{

logo.style.transform="rotate(-3deg) scale(1.05)";

});

logo.addEventListener("mouseleave",()=>{

logo.style.transform="rotate(0deg) scale(1)";

});

}


// ----------------------
// Barre de progression
// ----------------------

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.left="0";

progress.style.top="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.background="#FFD700";

progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scroll/height)*100;

progress.style.width=percent+"%";

});


// ----------------------
// Bouton WhatsApp Pulse
// ----------------------

const whatsapp=document.querySelector(".floating-whatsapp");

setInterval(()=>{

if(!whatsapp) return;

whatsapp.animate([

{transform:"scale(1)"},

{transform:"scale(1.15)"},

{transform:"scale(1)"}

],{

duration:800

});

},3500);


// ----------------------
// Animation Hero
// ----------------------

const hero=document.querySelector(".hero-content");

window.addEventListener("load",()=>{

if(hero){

hero.animate([

{opacity:0,transform:"translateY(50px)"},

{opacity:1,transform:"translateY(0)"}

],{

duration:1200,

fill:"forwards"

});

}

});

/* =====================================
   AUTO SCROLL PREMIUM
===================================== */

let isScrolling = true;

const speed = 1.2; // Vitesse du défilement

function autoScroll() {

    if (!isScrolling) return;

    window.scrollBy({
        top: speed,
        behavior: "auto"
    });

    const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

    if (bottomReached) {

        isScrolling = false;

        // Attendre 2 secondes en bas
        setTimeout(() => {

            smoothBackToTop();

        },2000);

    }

    requestAnimationFrame(autoScroll);

}

function smoothBackToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

    // Attendre que la remontée se termine
    setTimeout(()=>{

        isScrolling = true;

        autoScroll();

    },1800);

}

// Lancer après le loader
window.addEventListener("load",()=>{

    setTimeout(()=>{

        autoScroll();

    },3000);

});


/* ============================
   Pause si l'utilisateur touche
============================ */

["touchstart","mousedown","wheel"].forEach(event=>{

    window.addEventListener(event,()=>{

        isScrolling = false;

    });

});


/* ============================
   Reprendre après 8 secondes
============================ */

let timer;

["touchstart","mousedown","wheel"].forEach(event=>{

    window.addEventListener(event,()=>{

        clearTimeout(timer);

        timer = setTimeout(()=>{

            if(!isScrolling){

                isScrolling=true;

                autoScroll();

            }

        },8000);

    });

});

// ----------------------
// Console
// ----------------------

console.log("%c🦁 LIONKING PREMIUM","color:gold;font-size:22px;font-weight:bold;");