// Adiciona um 'escutador de eventos' que aguarda o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona o formulário pelo ID
    const form = document.getElementById('contact-form');

    // Adiciona um evento que é acionado quando o formulário é enviado
    form.addEventListener('submit', function (event) {

        // Impede o comportamento padrão do formulário, que é recarregar a página
        event.preventDefault();

        // Pega os elementos dos campos do formulário
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // 1. Validação do formulário: verifica se os campos estão preenchidos [cite: 58]
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return; // Para a execução se houver erro
        }

        // 2. Validação do formato do e-mail 
        // Expressão regular simples para verificar o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return; // Para a execução se o e-mail for inválido
        }

        // 3. Simulação do envio do formulário 
        // Se todas as validações passarem, exibe a mensagem de sucesso
        alert('Mensagem enviada com sucesso!');

        // Limpa os campos do formulário após o "envio"
        form.reset();
    });
});