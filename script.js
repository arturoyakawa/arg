console.log("don't look over here, @pacni7")
/** @type {HTMLAudioElement} */
const audio = document.getElementById("fallenchild");

audio.volume = .2
audio.addEventListener("canplaythrough", () => {
    audio.play();
}, { once: true });