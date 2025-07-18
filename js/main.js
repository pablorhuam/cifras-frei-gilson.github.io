// Main JavaScript file for Cifras do Frei Gilson

document.addEventListener('DOMContentLoaded', function() {
    console.log('Site de Cifras do Frei Gilson carregado com sucesso!');
    
    // Inicializar todas as funcionalidades interativas
    initMobileMenu();
    initFaqAccordion();
    initCopyPixKey();
    initFormValidation();
    initSmoothScroll();
    initAnimations();
    initPreviewTabs();
    initTestimonialsCarousel();
});

// Função para controle do menu mobile
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animação do ícone do menu
            const spans = this.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Fechar menu ao clicar em um link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// Função para controle do accordion de FAQ
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // Inicialmente esconder as respostas
        if (answer) {
            answer.style.display = 'none';
        }
        
        if (question) {
            question.addEventListener('click', function() {
                // Toggle da classe active
                item.classList.toggle('active');
                
                // Toggle da exibição da resposta com animação
                if (answer) {
                    if (item.classList.contains('active')) {
                        answer.style.display = 'block';
                        answer.style.maxHeight = '0';
                        setTimeout(() => {
                            answer.style.maxHeight = answer.scrollHeight + 'px';
                            answer.style.transition = 'max-height 0.3s ease';
                        }, 10);
                    } else {
                        answer.style.maxHeight = '0';
                        setTimeout(() => {
                            answer.style.display = 'none';
                        }, 300);
                    }
                }
            });
        }
    });
}

// Função para copiar a chave Pix
function initCopyPixKey() {
    const copyButton = document.getElementById('copyPixKey');
    
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const pixKey = this.previousElementSibling.querySelector('strong').textContent;
            
            // Criar um elemento temporário para copiar o texto
            const tempInput = document.createElement('input');
            tempInput.value = pixKey;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            // Feedback visual
            const originalText = this.textContent;
            this.textContent = 'Copiado!';
            this.classList.add('copied');
            
            // Restaurar o texto original após 2 segundos
            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('copied');
            }, 2000);
            
            // Mostrar mensagem de feedback
            showMessage('Código Pix copiado para a área de transferência!', 'success');
        });
    }
}

// Função para validação de formulário
function initFormValidation() {
    const form = document.getElementById('paymentNotificationForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (validateForm()) {
                // Simulação de envio do formulário
                showMessage('Notificação enviada com sucesso! Você receberá o acesso em breve.', 'success');
                form.reset();
            }
        });
        
        // Validação em tempo real para campos específicos
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                validateEmail(this);
            });
        }
        
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                formatPhoneNumber(this);
            });
        }
    }
}

// Função para validação do formulário completo
function validateForm() {
    const form = document.getElementById('paymentNotificationForm');
    let isValid = true;
    
    // Validar campos obrigatórios
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Este campo é obrigatório');
            isValid = false;
        } else {
            clearFieldError(field);
        }
    });
    
    // Validar email
    const emailInput = document.getElementById('email');
    if (emailInput && emailInput.value.trim()) {
        if (!validateEmail(emailInput)) {
            isValid = false;
        }
    }
    
    // Validar telefone
    const phoneInput = document.getElementById('phone');
    if (phoneInput && phoneInput.value.trim()) {
        if (!validatePhone(phoneInput)) {
            isValid = false;
        }
    }
    
    return isValid;
}

// Função para validar email
function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(input.value.trim());
    
    if (!isValid && input.value.trim()) {
        showFieldError(input, 'Por favor, insira um email válido');
    } else {
        clearFieldError(input);
    }
    
    return isValid;
}

// Função para validar telefone
function validatePhone(input) {
    // Remover caracteres não numéricos para validação
    const phoneNumber = input.value.replace(/\D/g, '');
    const isValid = phoneNumber.length >= 10; // Pelo menos 10 dígitos (DDD + número)
    
    if (!isValid && input.value.trim()) {
        showFieldError(input, 'Por favor, insira um telefone válido com DDD');
    } else {
        clearFieldError(input);
    }
    
    return isValid;
}

// Função para formatar número de telefone
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 0) {
        // Formatar como (XX) XXXXX-XXXX
        if (value.length <= 2) {
            value = `(${value}`;
        } else if (value.length <= 7) {
            value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
        } else {
            value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
        }
    }
    
    input.value = value;
}

// Função para mostrar erro em campo específico
function showFieldError(field, message) {
    // Remover mensagem de erro existente
    clearFieldError(field);
    
    // Adicionar classe de erro
    field.classList.add('error');
    
    // Criar e adicionar mensagem de erro
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    errorMessage.style.color = 'var(--accent-color)';
    errorMessage.style.fontSize = 'var(--font-size-sm)';
    errorMessage.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorMessage);
}

// Função para limpar erro de campo
function clearFieldError(field) {
    field.classList.remove('error');
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Função para rolagem suave ao clicar em links internos
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Rolagem suave
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Função para adicionar animações na página
function initAnimations() {
    // Animação de fade-in para elementos ao entrar na viewport
    const animateElements = document.querySelectorAll('.content-item, .testimonial, .preview-item');
    
    // Função para verificar se elemento está visível
    function checkVisibility() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // Adicionar classe para animação CSS
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Verificar visibilidade inicial e adicionar listener para scroll
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
}

// Função para exibir mensagens de feedback ao usuário
function showMessage(message, type = 'info') {
    console.log(`${type.toUpperCase()}: ${message}`);
    
    // Criar elemento de mensagem
    const messageElement = document.createElement('div');
    messageElement.className = `message message-${type}`;
    messageElement.textContent = message;
    
    // Estilizar o elemento
    Object.assign(messageElement.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        borderRadius: '5px',
        zIndex: '1000',
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease'
    });
    
    // Definir cores com base no tipo
    switch (type) {
        case 'success':
            messageElement.style.backgroundColor = 'var(--success-color)';
            break;
        case 'error':
            messageElement.style.backgroundColor = 'var(--accent-color)';
            break;
        case 'warning':
            messageElement.style.backgroundColor = 'var(--warning-color)';
            break;
        default:
            messageElement.style.backgroundColor = 'var(--primary-color)';
    }
    
    messageElement.style.color = 'white';
    
    // Adicionar ao DOM
    document.body.appendChild(messageElement);
    
    // Animar entrada
    setTimeout(() => {
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'translateY(0)';
    }, 10);
    
    // Remover após 5 segundos
    setTimeout(() => {
        messageElement.style.opacity = '0';
        messageElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            document.body.removeChild(messageElement);
        }, 300);
    }, 5000);
}// 
Função para controlar as abas de prévia do conteúdo
function initPreviewTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover classe active de todos os botões
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adicionar classe active ao botão clicado
                this.classList.add('active');
                
                // Esconder todos os conteúdos
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Mostrar o conteúdo correspondente
                const tabId = this.getAttribute('data-tab');
                const activeContent = document.getElementById(`${tabId}-content`);
                if (activeContent) {
                    activeContent.classList.add('active');
                }
            });
        });
    }
}// Funç
ão para controlar o carrossel de depoimentos
function initTestimonialsCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Função para mostrar um slide específico
    function showSlide(index) {
        // Garantir que o índice esteja dentro dos limites
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        // Atualizar o slide atual
        currentSlide = index;
        
        // Esconder todos os slides e remover classe active dos indicadores
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Mostrar o slide atual e ativar o indicador correspondente
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    // Configurar os botões de navegação
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }
    
    // Configurar os indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Configurar rotação automática
    let autoRotate = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Pausar rotação automática quando o mouse estiver sobre o carrossel
    const carouselContainer = document.querySelector('.testimonials-carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoRotate);
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            autoRotate = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 5000);
        });
    }
    
    // Inicializar o primeiro slide
    showSlide(0);
}