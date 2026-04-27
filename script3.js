const btn = document.querySelector(".accept")
const cookie = document.querySelector(".cookie")


function dodaj() {
    const cookie2 = localStorage.getItem("cookie")
    if(cookie2){cookie.classList.add("hide")}
}

function dodaj2() {
    localStorage.setItem("cookie", "true")
    cookie.classList.add("hide")
}
btn.addEventListener("click", dodaj2)
dodaj()