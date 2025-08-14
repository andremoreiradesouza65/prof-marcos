document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if(name && email && message) {
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');

        // Aqui você pode adicionar o código para enviar os dados por e-mail
        // ou para um serviço de backend (necessário conhecimento avançado)
        // Por exemplo, usando Fetch API
        
        // Exemplo:
        // fetch('https://seu-backend-url.com/send-email', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ name, email, message })
        // })
        // .then(response => response.json())
        // .then(data => console.log(data));

    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});