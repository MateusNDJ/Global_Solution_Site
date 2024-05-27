document.getElementById('menu').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        var id = event.target.getAttribute('href').substring(1);
        document.getElementById(id).scrollIntoView();
        event.preventDefault();
    }
});

document.getElementById('formContato').addEventListener('submit', function(event) {
    // Aqui você pode adicionar a validação do formulário
    event.preventDefault();
});
