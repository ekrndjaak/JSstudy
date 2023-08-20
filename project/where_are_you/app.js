const express = require('express');
const app = express();
const port = 3000;

window.open('C:\Users\ekrnd\OneDrive\바탕 화면\github\JS\JSstudy\project\where_are_you\index.html')

const users = [
    { username: 'admin', password: 'admin' },
    { username: 'user2', password: 'password2' }
];

const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

const contentSection = document.createElement('div');
contentSection.id = 'contentSection';
contentSection.style.display = 'none';

const homeButton = document.createElement('button');
homeButton.textContent = '홈으로';
homeButton.style.marginTop = '10px';
homeButton.addEventListener('click', () => {
    contentSection.style.display = 'none';
    loginForm.style.display = 'block';
    message.textContent = '';
});

document.body.appendChild(contentSection);

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = event.target.username.value;
    const passwordInput = event.target.password.value;

    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
        message.textContent = '로그인 성공!';
        
        window.location.href = 'welcome.html';

        
    } else {
        message.textContent = '로그인 실패. 사용자 이름 또는 비밀번호를 확인하세요.';
    }
});
