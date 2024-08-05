document.getElementById('senha').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var senha = document.getElementById('senha').value;
        var senhaCorreta = 'jamie hewlett';

        if (senha.toLowerCase() === senhaCorreta.toLowerCase()) {
            window.location.href = 'index4.html';
        } else {
            alert('Você já foi melhor, tente novamente corno.');
        }
    }
});
