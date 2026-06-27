/** @type {HTMLAudioElement} */
const bgm = document.getElementById("bgm")
bgm.loop = true

let clickedOnce = false
document.addEventListener("selectionchange", () => {
    if (clickedOnce) { return }

    const selection = window.getSelection();

    if (!(selection.toString().length > 40)) {
        return
    }
    document.body.classList.add('snow')
    bgm.volume = .2
    bgm.play()


    clickedOnce = true
})