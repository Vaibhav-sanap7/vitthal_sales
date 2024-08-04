// code snippet for navbar

var burger_elem = document.querySelector(".ham-burger");
var nav_list = document.querySelector(".nav-list");
var nav = document.querySelector("nav");

burger_elem.addEventListener("click", function(){
    nav_list.classList.toggle('nav-list-active');
    burger_elem.classList.toggle("toggle");
    nav.classList.toggle("slide-active")
})

// code snippet for changing the style of nav when scrolled

window.addEventListener('scroll', function(){
    var navbar = document.querySelector('nav');  
    navbar.classList.toggle('sticky', window.scrollY > 0);
})


if (screen.width <= 620){
    var nav_items_lst = document.querySelectorAll(".nav-items a");
    for (let i = 0; i < nav_items_lst.length; i++){
        nav_items_lst[i].addEventListener("click", function(){
            if ("toggle" in burger_elem.classList){
                burger_elem.classList.remove("toggle")
                nav_list.classList.remove('nav-list-active'); 
            }
        })
    }
}


