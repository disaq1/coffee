const toggleBtn = document.querySelector('.burger--btn');
const headerMenu = document.querySelector('.header__menu');

toggleBtn.onclick = function() {
    headerMenu.classList.toggle('active');
}
console.log(toggleBtn);