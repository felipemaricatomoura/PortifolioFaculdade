// Adiciona um 'escutador de eventos' que aguarda o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona o formul�rio pelo ID
    const form = document.getElementById('contact-form');

    // Adiciona um evento que � acionado quando o formul�rio � enviado
    form.addEventListener('submit', function (event) {

        // Impede o comportamento padr�o do formul�rio, que � recarregar a p�gina
        event.preventDefault();

        // Pega os elementos dos campos do formul�rio
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // 1. Valida��o do formul�rio: verifica se os campos est�o preenchidos [cite: 58]
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return; // Para a execu��o se houver erro
        }

        // 2. Valida��o do formato do e-mail 
        // Express�o regular simples para verificar o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um endere�o de e-mail v�lido.');
            return; // Para a execu��o se o e-mail for inv�lido
        }

        // 3. Simula��o do envio do formul�rio 
        // Se todas as valida��es passarem, exibe a mensagem de sucesso
        alert('Mensagem enviada com sucesso!');

        // Limpa os campos do formul�rio ap�s o "envio"
        form.reset();
    });
});