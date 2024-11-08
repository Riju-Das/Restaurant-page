import "./style.css";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import { createhome } from "./home";
import { createmenu } from "./menu";

const content = document.querySelector("#content")
const menubtn = document.querySelector(".menubtn")
const homebtn = document.querySelector(".homebtn")
const main = document.querySelector(".main")

const videotag1 = document.createElement("video")
videotag1.classList.add("vid")
videotag1.setAttribute("autoplay","");
videotag1.loop=true;
videotag1.muted= true;
videotag1.preload = "auto";
videotag1.style.zIndex = "10"
videotag1.disablePictureInPicture = true;


const videotag2 = document.createElement("video")
videotag2.classList.add("vid")
videotag2.setAttribute("autoplay","");
videotag2.loop=true;
videotag2.muted= true;
videotag2.preload = "auto"; 
videotag2.style.zIndex = "8"
videotag2.style.display="none"
videotag2.disablePictureInPicture = true;

const sourcetag1 = document.createElement("source")
sourcetag1.src= video1


const sourcetag2 = document.createElement("source")
sourcetag2.src= video2




content.appendChild(videotag1)
content.appendChild(videotag2)
videotag1.appendChild(sourcetag1)
videotag2.appendChild(sourcetag2)


window.onload = function() {
    createhome();
};


menubtn.addEventListener("click",()=>{
    main.innerHTML = " "
    videotag2.style.display="block"
    videotag1.style.display="none"
    videotag2.style.zIndex = "10"
    videotag1.style.zIndex = "8"
    createmenu()
    
    

    
})

menubtn.addEventListener("mouseover",()=>{
    videotag2.style.display="block"
    videotag1.style.display="none"
    videotag2.style.zIndex = "10"
    videotag1.style.zIndex = "8"
    
    
    

    
})



homebtn.addEventListener("click",()=>{
    main.innerHTML = " "
    createhome();
    videotag1.style.display="block"
    videotag2.style.display="none"
    videotag1.style.zIndex = "10"
    videotag2.style.zIndex = "8"
    
})

homebtn.addEventListener("mouseover",()=>{
    videotag1.style.display="block"
    videotag2.style.display="none"
    videotag1.style.zIndex = "10"
    videotag2.style.zIndex = "8"
    
})