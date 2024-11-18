import myrestaurant from "./Images/Aboutfolder/myrestaurant.png"
const main = document.querySelector(".main")
export function createabout(){
    
    const aboutcont = document.createElement("div")
    aboutcont.classList.add("aboutcont")
    

    firstdiv(aboutcont)
    seconddiv(aboutcont)
    thirddiv(aboutcont)

    main.appendChild(aboutcont)
}

function firstdiv(aboutcont){
    const firstdivabout = document.createElement("div")
    firstdivabout.classList.add("firstdivabout")

    const imgsection = document.createElement("img")
    imgsection.src = myrestaurant
    imgsection.classList.add("myrestimg")

    const aboutrestcont = document.createElement("div")
    aboutrestcont.classList.add("aboutrestcont")

    const aboutheading = document.createElement("div")
    aboutheading.classList.add("aboutheading")
    aboutheading.innerHTML = "Aroma di Italia, where every bite is a journey to the heart of Italy!"

    const aboutwriting = document.createElement("div")
    aboutwriting.classList.add("aboutwriting")
    aboutwriting.innerHTML = "From the moment you step through our doors, youre greeted by the enticing aroma of freshly baked bread, simmering sauces, and herbs that transport you straight to the cobblestone streets of Italy. Were more than just a restaurant—were your escape to a world of vibrant flavors, cozy ambiance, and genuine hospitality. Our chefs are passionate artists, blending tradition with innovation to create dishes that celebrate Italys rich culinary heritage. From silky handmade pastas to pizzas with perfectly crisped crusts from our wood-fired oven, every plate is crafted with love and the finest ingredients. Whether you're here for a romantic evening, a lively family dinner, or a quick escape from the everyday, Aroma di Italia promises to make every moment unforgettable. Come for the food, stay for the experience, and leave with the taste of Italy lingering in your heart. Buon Appetito!"

    aboutrestcont.appendChild(aboutheading)
    aboutrestcont.appendChild(aboutwriting)

    firstdivabout.appendChild(imgsection)
    firstdivabout.appendChild(aboutrestcont)

    aboutcont.appendChild(firstdivabout)
}
function seconddiv(aboutcont){
    const aboutchefcont= document.createElement("div")
    aboutchefcont.classList.add("aboutchefcont")

    const cheftext  = document.createElement("div")
    cheftext.classList.add("cheftext")
    cheftext.innerHTML ="Meet Our Lead Chefs!"

    const chefflex = document.createElement("div")
    chefflex.classList.add("chefflex")

    const firstchefcont = document.createElement("div")
    firstchefcont.classList.add("firstchefcont")
    firstchefcont.classList.add("chefcont")

    
    const secondchefcont = document.createElement("div")
    secondchefcont.classList.add("secondchefcont")
    secondchefcont.classList.add("chefcont")
    
    const thirdchefcont = document.createElement("div")
    thirdchefcont.classList.add("thirdchefcont")
    thirdchefcont.classList.add("chefcont")

    const firstchefimg = document.createElement("div")
    const firstchefname = document.createElement("div")
    firstchefname.classList.add("chefname")
    firstchefname.innerHTML = "Gordon Ramsey"
    firstchefimg.classList.add("chefimg")
    firstchefimg.classList.add("chefimg1")

    const secondchefimg = document.createElement("div")
    const secondchefname = document.createElement("div")
    secondchefname.classList.add("chefname")
    secondchefname.innerHTML = "Yannick Alléno"
    secondchefimg.classList.add("chefimg")
    secondchefimg.classList.add("chefimg2")

    const thirdchefimg = document.createElement("div")
    const thirdchefname = document.createElement("div")
    thirdchefname.classList.add("chefname")
    thirdchefname.innerHTML = "Quique Dacosta"
    thirdchefimg.classList.add("chefimg")
    thirdchefimg.classList.add("chefimg3")



    
    aboutchefcont.appendChild(cheftext)
    aboutchefcont.appendChild(chefflex)
    
    chefflex.appendChild(firstchefcont)
    firstchefcont.appendChild(firstchefimg)
    firstchefcont.appendChild(firstchefname)
    
    chefflex.appendChild(secondchefcont)
    secondchefcont.appendChild(secondchefimg)
    secondchefcont.appendChild(secondchefname)
    
    chefflex.appendChild(thirdchefcont)
    thirdchefcont.appendChild(thirdchefimg)
    thirdchefcont.appendChild(thirdchefname)
    aboutcont.appendChild(aboutchefcont)
}

function thirddiv(aboutcont){
    const thirddivcont = document.createElement("div")
    thirddivcont.classList.add("aboutthirddiv")

    const locationcont = document.createElement("div")
    locationcont.classList.add("locationcont")

    const locationtext = document.createElement("div")
    locationtext.classList.add("locationtext")
    locationtext.innerHTML = "Location"

    const location = document.createElement("iframe")
    location.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14746.228084102115!2d88.390614!3d22.483275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02718311de5a6d%3A0x5440f9b0cc0b97a4!2sKFC!5e0!3m2!1sen!2sin!4v1731923477336!5m2!1sen!2sin";
    location.classList.add("location")
    

    const contactcont = document.createElement("div")
    contactcont.classList.add("contactcont")

    const contacttext = document.createElement("div")
    contacttext.classList.add("contacttext")
    contacttext.innerHTML ="Contacts"

    const hourstext = document.createElement("div")
    hourstext.innerHTML = "Hours"
    hourstext.classList.add("hourstext")

    const contacts = document.createElement("div")
    contacts.classList.add("contacts")  
    contacts.innerHTML = "<ul><li>📞 1234567890</li><li>aromadiitalia@gmail.com</li></ul>"

    const hours = document.createElement("div")
    hours.classList.add("hours")
    hours.innerHTML = "<ul><li>Mon - Wed, 8 am - 10 pm</li><li>Thu - Sun, 8 am - 11 pm</li></ul>"


    thirddivcont.appendChild(locationcont)
    thirddivcont.appendChild(contactcont)  
    
    locationcont.appendChild(locationtext)
    locationcont.appendChild(location)

    contactcont.appendChild(contacttext)
    contacttext.appendChild(contacts)

    contactcont.appendChild(hourstext)
    hourstext.appendChild(hours)
    
    aboutcont.appendChild(thirddivcont)
}