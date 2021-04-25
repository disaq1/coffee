const toggleBtn = document.querySelector('.burger--btn');
const headerMenu = document.querySelector('.header__menu');

const toMain = document.getElementById('toMain');
console.log(toMain);

toggleBtn.onclick = function() {
    headerMenu.classList.toggle('active');
}

toMain.onclick = function() {
    headerMenu.classList.remove('active');
}