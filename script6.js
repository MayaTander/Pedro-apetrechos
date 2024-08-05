document.getElementById('senha').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var senha = document.getElementById('senha').value;
        var senhaCorreta = 'a primeira vista ele parecia tao respeitavel';

        if (senha.toLowerCase() === senhaCorreta.toLowerCase()) {
            window.location.href = 'indexrec.html';
        } else {
            alert('Você já foi melhor, tente novamente corno.');
        }
    }
});
