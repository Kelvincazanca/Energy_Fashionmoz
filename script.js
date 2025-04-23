document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    menuToggle.addEventListener('click', function() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Tamanhos selecionáveis
    const sizeOptions = document.querySelectorAll('.sizes span');
    sizeOptions.forEach(size => {
        size.addEventListener('click', function() {
            // Remove a seleção de todos os tamanhos no mesmo card
            this.parentElement.querySelectorAll('span').forEach(s => {
                s.classList.remove('selected');
            });
            
            // Adiciona a seleção ao tamanho clicado
            this.classList.add('selected');
        });
    });

    // Simulação de carregamento de produtos
    const loadMoreProducts = () => {
        // Em uma aplicação real, aqui seria uma chamada AJAX para carregar mais produtos
        console.log('Carregando mais produtos...');
    };

    // Detecta quando o usuário chega perto do final da página
    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
            loadMoreProducts();
        }
    });
});