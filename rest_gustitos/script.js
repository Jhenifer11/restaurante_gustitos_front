const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.onload = function() {
    const banner = document.getElementById('welcome-banner');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 3000); };

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    if (name.value === '' || email.value === '') {
        alert('Por favor complete todos los campos.');
        event.preventDefault();
    }
});

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Por favor complete todos los campos.');
        event.preventDefault();
    }
});
