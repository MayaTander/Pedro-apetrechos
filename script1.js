document.getElementById('senha').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var senha = document.getElementById('senha').value;
        var senhaCorreta = '1357';

        if (senha === senhaCorreta) {
            window.location.href = 'index2.html';
        } else {
            alert('Você já foi melhor, tente novamente corno.');
        }
    }
});
