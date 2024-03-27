const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
if (nav.classList.toggle('open')) {
navBtnImg.src = "./img/NAV CLOSE.svg";
} else {
navBtnImg.src = './img/NAV.svg';
}
}



// Получаем ссылки на элементы
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModal');
var closeBtn = document.getElementById('closeModal');
var submitBtn = document.querySelector('.modal-btn');

// Открываем модальное окно при клике на кнопку
btn.onclick = function() {
  modal.style.display = 'block';
  submitBtn.classList.add('modal-btn-initial'); // Добавляем класс при открытии модального окна
};

// Закрываем модальное окно при клике на крестик
closeBtn.onclick = function() {
  modal.style.display = 'none';
};

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
