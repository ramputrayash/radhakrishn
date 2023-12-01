const menu_icon = document.querySelector(".menu-icon");
const menu_title = document.querySelector(".main .menu h2");
const home_image = document.querySelector(".home img.stars");
const home = document.querySelector(".home");
const menu_box = document.querySelector(".menu_box");

window.addEventListener("scroll",()=>{
   let value = window.scrollY;

    home_image.style.marginLeft = value * -.5 + 'px';
    home.style.opacity = value * -.1 + 'px';
    
})

menu_title.addEventListener("click",()=>{
    menu_icon.click();
})

menu_icon.addEventListener("click",()=>{
    menu_icon.classList.toggle("active_menu");
    menu_box.classList.toggle("open_menu");
})

document.addEventListener("click",(e)=>{
    if(e.target !== menu_icon) {
        menu_box.classList.remove("open_menu");
        menu_icon.classList.remove("active_menu");
    }
})

menu_icon.addEventListener("mousemove",(e)=>{
    let x = e.offsetX;
    let y = e.offsetY;
    let menu_iconWidth = menu_icon.clientWidth;
    let menu_iconHeight = menu_icon.clientHeight;
    let transX = (x - menu_iconWidth/2);
    let transY = (y - menu_iconHeight/2);
    menu_icon.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

    let mx = e.pageX - menu_icon.offsetLeft;
    let my = e.pageY - menu_icon.offsetTop;
    menu_icon.style.setProperty('--x',mx + 'px');
    menu_icon.style.setProperty('--y',my + 'px');

});
menu_icon.addEventListener("mouseout",(e)=>{
    menu_icon.style.transform = ``;
})