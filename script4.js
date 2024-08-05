document.getElementById('senha').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var senha = document.getElementById('senha').value;
        var senhaCorreta = 'restritor';

        if (senha.toLowerCase() === senhaCorreta.toLowerCase()) {
            window.location.href = 'index5.html';
        } else {
            alert('Você já foi melhor, tente novamente corno.');
        }
    }
});
