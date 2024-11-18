
export function createmenu(){


    const main = document.querySelector(".main")
    const mainmenu = document.createElement("div")
    const droplet = document.createElement("div")
    
    droplet.classList.add("droplet")
    mainmenu.classList.add("mainmenu")
    
    

    main.appendChild(droplet) 
    main.appendChild(mainmenu)

    createfood(mainmenu)

    
    



}

function createfood(mainmenu){
    const appetizersContainer = document.createElement("div")
    appetizersContainer.classList.add("appetizers-container")
    mainmenu.appendChild(appetizersContainer)

    const mainCoursesContainer = document.createElement("div")
    mainCoursesContainer.classList.add("main-courses-container")
    mainmenu.appendChild(mainCoursesContainer)
    
    const dessertsContainer = document.createElement("div")
    dessertsContainer.classList.add("desserts-container")
    mainmenu.appendChild(dessertsContainer)

    const menuData = {
        appetizers: [
            { name: "Bruschetta", price: 250 },
            { name: "Caprese Salad", price: 350 },
            { name: "Fried Calamari", price: 500 },
            { name: "Garlic Bread", price: 150 },
            { name: "Stuffed Mushrooms", price: 400 },
            { name: "Antipasto Platter", price: 600 }
        ],
        mainCourses: [
            { name: "Spaghetti Carbonara", price: 600 },
            { name: "Lasagna", price: 700 },
            { name: "Margherita Pizza", price: 550 },
            { name: "Penne Arrabbiata", price: 500 },
            { name: "Ravioli di Ricotta", price: 650 },
            { name: "Chicken Parmigiana", price: 750 },
            { name: "Seafood Risotto", price: 800 }
        ],
        desserts: [
            { name: "Tiramisu", price: 350 },
            { name: "Panna Cotta", price: 400 },
            { name: "Gelato", price: 250 },
            { name: "Cannoli", price: 300 },
            { name: "Chocolate Lava Cake", price: 450 },
            { name: "Ricotta Cheesecake", price: 500 }
        ]
    };
    
    function createMenuCategory(category, items, container) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category
        categoryDiv.appendChild(categoryTitle);
    
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            
            const itemName = document.createElement('span');
            itemName.textContent = item.name;
            menuItem.appendChild(itemName);
            
            const itemPrice = document.createElement('span');
            itemPrice.classList.add('price');
            itemPrice.textContent = `₹${item.price}`;
            menuItem.appendChild(itemPrice);
    
            categoryDiv.appendChild(menuItem);
        });
    
        container.appendChild(categoryDiv);
    }
    
    function generateMenu() {
        createMenuCategory('Appetizers', menuData.appetizers, appetizersContainer);
        createMenuCategory('Main Courses', menuData.mainCourses, mainCoursesContainer);
        createMenuCategory('Desserts', menuData.desserts, dessertsContainer);
    }
    
    generateMenu();


}