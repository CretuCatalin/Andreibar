const MENU_ITEMS = [{
    img: "assets/prociuto-e-fungi.jpg",
    title: "Pizza Prociuto E Fungi",
    price: "30 Lei",
    description: "Sos de rosii, branza, salam, masline, ardei, ciuperci"
},{
    img: "assets/diavola.jpg",
    title: "Pizza Diavola",
    price: "45 Lei",
    description: "Sos de rosii, branza, salam, masline, ardei, ciuperci"
},{
    img: "assets/crudo.jpg",
    title: "Pizza Crudo",
    price: "30 Lei",
    description: "Sos de rosii, branza, salam, masline, ardei, ciuperci"
},{
    img: "assets/prociuto-e-fungi.jpg",
    title: "Pizza Quatro Stagione",
    price: "30 Lei",
    description: "Sos de rosii, branza, salam, masline, ardei, ciuperci"
},{
    img: "assets/prociuto-e-fungi.jpg",
    title: "Pizza Quatro Stagione",
    price: "30 Lei",
    description: "Sos de rosii, branza, salam, masline, ardei, ciuperci"
},{
    img: "assets/1.jpeg",
    title: "Pizza Quatro Stagione",
    price: "30 Lei",
    description: "Sos de rosii, branza, salam, masline, ardei, ciuperci"
},
{
    img: "assets/1.jpeg",
    
},
{
    img: "assets/3.jpeg",
    
},
{
    img: "assets/4.jpeg",
    
},
{
    img: "assets/6.jpeg",
    
},
{
    img: "assets/7.jpeg",
    
},
]

const createMenuItems = () => {
    const menu = document.getElementById("menu");
    const items = MENU_ITEMS.map(item => `
    <food-card 
    img=${item.img} 
    titlu="${item.title}" 
    price="${item.price}"
    description="${item.description}"
    ></food-card>
    `);

    menu.innerHTML = items;
}

window.onload = createMenuItems;