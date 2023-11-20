let theme = false

let body = document.querySelector("body")
let button = document.querySelector("button")
let nav = document.querySelector('nav')


button.addEventListener("click", function () {
    if (theme === false) {
        theme = true
    } else {
        theme = false
    }

    if (theme === false) {
        body.style.background = "white"
        body.style.color = "#2B3844"
    } else {
        body.style.background = "#2B3844"
        body.style.color = "white"
    }
})
