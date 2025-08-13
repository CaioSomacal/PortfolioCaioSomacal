// Aguarda o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para o menu mobile ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fecha o menu mobile ao clicar em um link dentro dele
        mobileMenu.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // --- Lógica para animação de scroll (revelar elementos) ---
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Opcional: para de observar o elemento uma vez que ele já foi revelado
                    // observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.1 // Revela o elemento quando 10% dele estiver visível
        });

        revealElements.forEach(el => observer.observe(el));
    }

    // --- Lógica para mudar a aparência do cabeçalho ao rolar a página ---
    const header = document.getElementById('header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Adiciona fundo e desfoque quando o usuário rola a página
                header.classList.add('bg-gray-900/80', 'backdrop-blur-sm');
                header.classList.remove('bg-transparent');
            } else {
                // Remove o fundo quando o usuário está no topo
                header.classList.remove('bg-gray-900/80', 'backdrop-blur-sm');
                header.classList.add('bg-transparent');
            }
        });
    }

});
