import videoUrl from "./video1.mp4";

const content = document.querySelector("#content")
const main = document.querySelector(".main")


export function createhome(){

    addtext()
}

function addtext(){
    const hometextcont = document.createElement("div")
    hometextcont.classList.add("hometextcont")

    const hometext1 = document.createElement("div")
    hometext1.classList.add("hometext1")
    hometext1.innerHTML = "Welcome To"

    const hometext2 = document.createElement("div")
    hometext2.classList.add("hometext2")
    hometext2.innerHTML = "Aroma di Italia"

    main.appendChild(hometextcont)
    hometextcont.appendChild(hometext1)
    hometextcont.appendChild(hometext2)

}