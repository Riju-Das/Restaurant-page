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

    const booktablecont = document.createElement("div")
    booktablecont.classList.add("booktablecont")
    booktablecont.innerHTML = "Book a Table"
    



    main.appendChild(hometextcont)
    hometextcont.appendChild(hometext1)
    hometextcont.appendChild(hometext2)

    main.appendChild(booktablecont)
    

    booktablecont.addEventListener("click", ()=>{
        bookatablefunction(main)
    })
}

function bookatablefunction(main){
    const box = document.createElement("div")
    box.classList.add("blackbox")
    main.appendChild(box)

    const formcont = document.createElement("div")
    const crossbtn = document.createElement("div")
    crossbtn.classList.add("crossbtn")
    crossbtn.innerHTML = `&times`

    const form = document.createElement('form');
    formcont.classList.add("formcont")

    const fields = [
        { label: 'Name', type: 'text', id: 'name' },
        { label: 'Email', type: 'email', id: 'email' },
        { label: 'Phone', type: 'tel', id: 'phone' },
        { label: 'Date', type: 'date', id: 'date' },
        { label: 'Time', type: 'time', id: 'time' },
        { label: 'Number of Guests', type: 'number', id: 'guests', min: 1, max: 20 },
    ];


    fields.forEach(field => {
        const label = document.createElement('label');
        label.textContent = field.label;
        label.setAttribute('for', field.id);

        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;
        if (field.min) input.min = field.min;
        if (field.max) input.max = field.max;

        form.appendChild(label);
        form.appendChild(input);
        
    });

    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Reserve Table';

    form.appendChild(submitButton);

    formcont.appendChild(crossbtn)
    formcont.appendChild(form);
    main.appendChild(formcont)

    submitButton.addEventListener('click', (event)=>{
        event.preventDefault()
        document.querySelector(".blackbox").remove()
        document.querySelector(".formcont").remove()
    })
    crossbtn.addEventListener('click', (event)=>{
        event.preventDefault()
        document.querySelector(".blackbox").remove()
        document.querySelector(".formcont").remove()
    })

}