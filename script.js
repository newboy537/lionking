/*==================================

        LIONKING PREMIUM

==================================*/

// Animation d'apparition

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// Animation du bouton

const button = document.querySelector(".join");

button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.03)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

});

// Petite vibration de la main

const hand = document.querySelector(".hand");

setInterval(() => {

    hand.animate([

        { transform: "translateY(12px)" },

        { transform: "translateY(-8px)" },

        { transform: "translateY(12px)" }

    ], {

        duration: 800

    });

},800);

// Apparition de la carte

const card = document.querySelector(".card");

card.animate([

{

opacity:0,

transform:"translateY(50px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards"

});

// Animation du logo

const logo=document.querySelector(".logo");

setInterval(()=>{

logo.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0)"

}

],{

duration:2500

});

},2500);

// Effet lumineux du bouton

setInterval(()=>{

button.animate([

{

boxShadow:"0 0 20px rgba(39,232,109,.4)"

},

{

boxShadow:"0 0 45px rgba(39,232,109,.9)"

},

{

boxShadow:"0 0 20px rgba(39,232,109,.4)"

}

],{

duration:1800

});

},1800);

// Détection navigateur

const ua=navigator.userAgent.toLowerCase();

const isTikTok=ua.includes("tiktok");

if(!isTikTok){

setTimeout(()=>{

window.location.href="https://whatsapp.com/channel/0029VbAetxL7DAX5z4Edxr0d";

},2500);

}

// Console

console.log("🦁 LIONKING READY");
