const bgm = document.getElementById("bgm")
let clickedOnce = false
window.addEventListener("mousedown", () => {
console.log("AJSUDAJUDAJUDASJD")
     if (clickedOnce) { return }
    console.log("click")
    document.body.classList.add('snow')
    bgm.volume = .2
    bgm.play()


    clickedOnce = true
})