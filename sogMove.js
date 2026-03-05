let sogPic = document.getElementById("sog");
sogPic.addEventListener("mousedown", moveRandom);

let meowAudio = document.getElementById("mew")

function moveRandom() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let clonAudio = meowAudio.cloneNode();
    let pitchRnd = (Math.random() * (1.5 - 0.3)) + 0.3;
    clonAudio.preservesPitch = false;
    clonAudio.volume = 0.1;
    clonAudio.playbackRate = pitchRnd;
    clonAudio.play();

    let randomWidth = Math.floor(Math.random() * (screenWidth - sogPic.offsetWidth));
    let randomHeight = Math.floor(Math.random() * (screenHeight - sogPic.offsetHeight));

    newWidth = randomWidth + "px";
    newHeight = randomHeight + "px";

    sogPic.style.top = newHeight;
    sogPic.style.left = newWidth;
}