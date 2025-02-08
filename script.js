const toggle = document.querySelector('.Open_menu');
const Close_Menu = document.querySelector('.Close_Menu');
const side_menu = document.querySelector('.Sidebar_menu');
const dark_mode = document.querySelector('.dark_mode');

toggle.addEventListener('click',() =>{
    side_menu.classList.add('Show_Menu');
});
toggle.addEventListener('click',() =>{
    dark_mode.classList.add('Dark_Theme_Active');
});
Close_Menu.addEventListener('click',() =>{
    side_menu.classList.remove('Show_Menu');
});
Close_Menu.addEventListener('click',() =>{
    dark_mode.classList.remove('Dark_Theme_Active');
});

// SLIDER

var splide = new Splide('.Top_Makers_Splide',{
    type:'loop',
    drag:'free',
    focus:'center',
    perPage:5,
    gap:'2rem',
    autoplay:true,
    loop:true,
    perMove:1,
    pagination: false,
});
splide.mount();