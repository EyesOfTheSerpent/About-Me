//Start

function toggleDisplay() {
    document.getElementById("toggleContainer").classList.toggle("hiddenContainer");
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(){
    const colorList = ["#341d39", "#1d2c39d", "#163f20", "#525b2d", "#731313", "#308f6b", "#4e39a9", "#2a8f3a", "#afaf2d", "#416ebd", "#851e93"];
    let random = getRandomNumber(0, 10);
    color = colorList[random];
    let divStyle = document.getElementById("buttonContainer");
    divStyle.style.backgroundColor = color;
}

const randomVideo = [
    "0vqkvpaDCj0", 
    "uUambLg0E6w", 
    "SeAAi7jWOl8", 
    "H2KwfZaZEuQ", 
    "34CZjsEI1yU", 
    "QVUcs5AXgFY", 
    "5Avkzkiy2rQ", 
    "EfGJ8ziSy5U", 
    "CL0VoyeqZ3c", 
    "o3egofHNr7Y", 
    "sQYc5oAE9Z8", 
    "xcfjTU7TWXk", 
    "kQWv-z9KlTA", 
    "qQEoevHhhbU"
];

const randomText = [
    "8 Graves - Evil", 
    "KUURO & Clockvice - All Night", 
    "The Toxic Avenger - My Only Chance", 
    "Vulta - Crepuscule", 
    "WIND ROSE - Diggy Diggy Hole", 
    "Infected Mushroom & WHITENO1SE - More of Just the Same", 
    "Unlike Pluto - I Need A Win", 
    "KEYGEN CHURCH - Tilaskarot",
    "Jim Carrey - Cuban Pete (Arkin Movie Mix)",
    "TatshMusicCircle - MOON LIGHT DANCE (Wait, when did this get in here?)", 
    "Stonebank - By Your Side (feat. EMEL)", 
    "Knife Party - Kaleidoscope", 
    "Blurred - Noise (Harukasuka Remix)", 
    "Le Castle Vania - Blood Code"
];

function changeVideo(){
    let videoContainer = document.getElementById("videoContainer");
    let textH3 = document.getElementById("videoh3");
    let random = getRandomNumber(0, 13);
    vid = randomVideo[random];
    rngText = randomText[random];

    textH3.innerText = rngText;
    videoContainer.innerHTML = '<iframe id="theVideo" src="https://www.youtube.com/embed/' + vid + '" ' + 'title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    //This string is way too long.
}

//End