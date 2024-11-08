
export function createmenu(){


    const main = document.querySelector(".main")
    const mainmenu = document.createElement("div")
    const droplet = document.createElement("div")
    
    droplet.classList.add("droplet")
    mainmenu.classList.add("mainmenu")
    main.appendChild(droplet) 
    main.appendChild(mainmenu)

}