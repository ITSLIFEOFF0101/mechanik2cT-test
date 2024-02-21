document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('auth-form');
    const loginContainer = document.getElementById('login-form');
    const container = document.querySelector('.container');

    // Проверяем, авторизирован ли пользователь по его айпи
    const ip = localStorage.getItem('userIP');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn && ip === getClientIp()) {
        // Если пользователь уже авторизован по этому айпи, скрываем форму аутентификации
        loginContainer.style.display = 'none';
        container.style.display = 'block';
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'Lenovo' && password === 'zaq1"SX') {
            // Аутентификация успешна
            loginContainer.style.display = 'none';
            container.style.display = 'block';

            // Запоминаем авторизацию по айпи пользователя
            localStorage.setItem('userIP', getClientIp());
            localStorage.setItem('isLoggedIn', true);

            // Показываем сообщение об успешной авторизации
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Authorization successful';
            successMessage.classList.add('success-message'); // Добавляем класс стиля для успешного сообщения
            loginForm.insertAdjacentElement('afterend', successMessage);

            // Скрыть сообщение об успешной авторизации через 3-5 секунд
            setTimeout(function () {
                successMessage.remove();
            }, getRandomInt(3000, 5000));
        } else {
            // Пароль неверный, показываем сообщение об ошибке
            alert('Invalid username or password. Please try again.');
        }
    });

    const folders = document.querySelectorAll('.folder span');

    folders.forEach(function (folder) {
        folder.addEventListener('click', function () {
            const nestedList = folder.parentElement.querySelector('ul');
            folder.parentElement.classList.toggle('open');
            nestedList.style.display = nestedList.style.display === 'none' ? 'block' : 'none';
        });
    });
});

// Функция для получения IP адреса клиента
function getClientIp() {
    // В этом примере возвращаем фиктивный IP, для реального использования используйте серверную сторону
    return '127.0.0.1';
}

// Функция для получения случайного целого числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Начало кода добавленного мной

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const loginBtn = document.getElementById('login-btn');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('login-form');

    // Открытие модального окна при нажатии на кнопку "Войти"
    loginBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Закрытие модального окна при нажатии на крестик
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Обработка отправки формы
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Проверка логина и пароля
        if (username === 'Lenovo' && password === 'zaq1"SX') {
            // Вывод сообщения об успешной авторизации
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Авторизация успешна!';
            successMessage.style.color = 'green';
            loginForm.appendChild(successMessage);

            // Закрытие модального окна через 3 секунды
            setTimeout(function() {
                modal.style.display = 'none';
            }, 3000);
        } else {
            // Вывод сообщения об ошибке авторизации
            const errorMessage = document.createElement('div');
            errorMessage.textContent = 'Неправильный логин или пароль';
            errorMessage.style.color = 'red';
            loginForm.appendChild(errorMessage);
        }
    });
});
