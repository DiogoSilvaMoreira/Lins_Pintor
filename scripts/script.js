// Seleciona o botão de alternância e o corpo do documento
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Carregar tema do armazenamento local, se houver
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme; // Aplica o tema salvo
    themeToggle.checked = savedTheme === 'dark'; // Define o estado do botão
}

// Alternar tema ao clicar no botão
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.className = 'dark'; // Aplica o tema escuro
        localStorage.setItem('theme', 'dark'); // Salva a preferência no localStorage
    } else {
        body.className = 'light'; // Aplica o tema claro
        localStorage.setItem('theme', 'light'); // Salva a preferência no localStorage
    }
});
