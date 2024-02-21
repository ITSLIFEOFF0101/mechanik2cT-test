document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('auth-form');
    
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'Lenovo' && password === 'zaq1"SX') {
            // Аутентификация успешна, показываем контейнер с файловой структурой
            document.getElementById('login-form').style.display = 'none';
            document.querySelector('.container').style.display = 'block';
        } else {
            // Пароль неверный, можем вывести сообщение об ошибке
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
