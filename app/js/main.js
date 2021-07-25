
var GetBurgerMenu = document.querySelector('.header__burger-menu');

var GetHeaderMenu = document.querySelector('.header__menu');

GetBurgerMenu.addEventListener('click', first);


function first(e){
    
    e.stopImmediatePropagation();
    this.removeEventListener("click", first);
    GetBurgerMenu.onclick = second;
    GetHeaderMenu.style.display = 'flex';
}
function second(){
      GetHeaderMenu.style.display = 'none';
      GetBurgerMenu.onclick = first;
    
}
