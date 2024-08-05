document.getElementById('senha').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var senha = document.getElementById('senha').value;
        var senhaCorreta = 'barats';

        if (senha.toLowerCase() === senhaCorreta.toLowerCase()) {
            window.location.href = 'index6.html';
        } else {
            alert('Você já foi melhor, tente novamente corno.');
        }
    }
});
