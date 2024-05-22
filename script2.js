const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup-section header');
const loginButton = document.querySelector('.login-section header');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const loginSuccessMessage = document.getElementById('login-success-message');

let accounts = []; 

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    

    accounts.push({ fullName, email, password });
    

    signupForm.reset();
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    

    const user = accounts.find(account => account.email === loginEmail && account.password === loginPassword);
    
    if (user) {
        
        window.location.href = 'home.html';
    } else {
        alert('Email hoặc mật khẩu không hợp lệ. Vui lòng thử lại.');
    }
});

loginButton.addEventListener('click', () => {
    container.classList.add('active');
});

signupButton.addEventListener('click', () => {
    container.classList.remove('active');
});