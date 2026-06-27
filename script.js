console.log("don't look over here, @pacni7")
const msg = document.getElementById("message")
/** @type {HTMLAudioElement}1*/
const bgm = document.getElementById("bgm")

let clickedOnce = false

window.addEventListener("click", () => {
    console.log("click")
    document.body.classList.add('snow')
    bgm.volume = .2
    bgm.preservesPitch = false
    bgm.playbackRate = .75
    bgm.play()
    msg.remove()

    if (clickedOnce) { return }

    let text = document.createElement("p")
    text.classList.add("snowymessage")
    text.textContent = "feeling cold?"
    document.body.appendChild(text)

    clickedOnce = true
})