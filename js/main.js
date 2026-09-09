/**
 * TEMPLATE BASE REUTILIZÁVEL - Script Principal
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar Ícones Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Elementos Globais
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const appointmentForm = document.getElementById('appointment-form');

    // 3. Efeito de Scroll no Header
    const handleScroll = () => {
        if (header) {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 4. Máscara de Telefone Automática
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}` + (x[3] ? `-${x[3]}` : '');
        });
    }

    // 5. Menu Mobile Drawer
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mobileNav.classList.toggle('active');

            const menuIcon = document.getElementById('menu-icon');
            if (menuIcon && window.lucide) {
                menuIcon.setAttribute('data-lucide', isExpanded ? 'menu' : 'x');
                window.lucide.createIcons();
            }
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                const menuIcon = document.getElementById('menu-icon');
                if (menuIcon && window.lucide) {
                    menuIcon.setAttribute('data-lucide', 'menu');
                    window.lucide.createIcons();
                }
            });
        });
    }

    // 6. Envio do Formulário para o WhatsApp
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const phoneVal = phoneInput ? phoneInput.value.trim() : '';
            const specialtySelect = document.getElementById('specialty');

            const name = nameInput ? nameInput.value.trim() : '';
            const specialty = specialtySelect ? specialtySelect.value : '';

            if (!name || !phoneVal) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            const message = [
                'Olá! Gostaria de solicitar um agendamento através do site:',
                '',
                `👤 *Nome:* ${name}`,
                `📱 *Contato:* ${phoneVal}`,
                `📌 *Assunto / Serviço:* ${specialty}`,
                '',
                '_Mensagem enviada pelo formulário do site._'
            ].join('\n');

            // Insira o número do cliente (DDD + Número sem símbolos)
            const phoneClinic = '5517997174677';
            const whatsappUrl = `https://wa.me/${phoneClinic}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }
});