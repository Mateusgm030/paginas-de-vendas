/**
 * Interaction and Animations for HOROS ELITE
 * Controla o IntersectionObserver (animações de scroll) e o menu de navegação mobile.
 */

document.addEventListener("DOMContentLoaded", () => {
    initScrollAnimations();
    initMobileMenu();
    initCheckoutForm();
});

/**
 * Animações de entrada baseadas em Scroll (IntersectionObserver)
 * Simula de forma eficiente os efeitos do Framer Motion.
 */
function initScrollAnimations() {
    const animatableElements = document.querySelectorAll(".animate-on-scroll");

    if ("IntersectionObserver" in window) {
        const observerOptions = {
            root: null, // viewport
            rootMargin: "0px 0px -80px 0px", // ativa ligeiramente antes de entrar totalmente na tela
            threshold: 0.1 // 10% do elemento visível
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    // Opcional: parar de observar após animação para economizar processamento
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatableElements.forEach((element) => {
            observer.observe(element);
        });
    } else {
        // Fallback caso o navegador não suporte IntersectionObserver
        animatableElements.forEach((element) => {
            element.classList.add("is-visible");
        });
    }
}

/**
 * Lógica do Menu Mobile Interativo e Acessível
 */
function initMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileNav = document.getElementById("mobile-nav");

    if (!menuBtn || !mobileNav) return;

    // Toggle menu
    menuBtn.addEventListener("click", () => {
        const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", !isExpanded);
        
        if (!isExpanded) {
            mobileNav.classList.remove("hidden");
            mobileNav.classList.add("flex");
            // Pequeno delay para a transição suave de opacidade
            setTimeout(() => {
                mobileNav.classList.remove("opacity-0");
                mobileNav.classList.add("opacity-100");
            }, 10);
            document.body.style.overflow = "hidden"; // Previne o scroll do body enquanto aberto
        } else {
            mobileNav.classList.remove("opacity-100");
            mobileNav.classList.add("opacity-0");
            // Aguarda o término da transição para esconder
            setTimeout(() => {
                mobileNav.classList.remove("flex");
                mobileNav.classList.add("hidden");
            }, 300);
            document.body.style.overflow = ""; // Restaura scroll do body
        }
    });

    // Fecha ao clicar em algum link do menu mobile
    const mobileNavLinks = mobileNav.querySelectorAll("a");
    mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menuBtn.setAttribute("aria-expanded", "false");
            mobileNav.classList.remove("opacity-100");
            mobileNav.classList.add("opacity-0");
            setTimeout(() => {
                mobileNav.classList.remove("flex");
                mobileNav.classList.add("hidden");
            }, 300);
            document.body.style.overflow = "";
        });
    });
}

/**
 * Lógica Interativa do Formulário de Checkout (Seção Comprar)
 */
function initCheckoutForm() {
    const form = document.getElementById("checkout-form");
    const purchaseBtn = document.getElementById("submit-purchase-btn");
    const colorOptions = document.querySelectorAll(".color-option-btn");
    const selectedColorInput = document.getElementById("selected-color");

    if (colorOptions.length > 0 && selectedColorInput) {
        colorOptions.forEach((btn) => {
            btn.addEventListener("click", () => {
                // Remove seleção anterior
                colorOptions.forEach((b) => {
                    b.classList.remove("ring-2", "ring-primary-container", "scale-105");
                    b.classList.add("scale-100");
                });
                
                // Aplica nova seleção
                btn.classList.add("ring-2", "ring-primary-container", "scale-105");
                btn.classList.remove("scale-100");
                selectedColorInput.value = btn.getAttribute("data-color-name");
            });
        });
    }

    if (form && purchaseBtn) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Desabilitar o botão e mostrar feedback de carregamento
            const originalBtnText = purchaseBtn.innerHTML;
            purchaseBtn.disabled = true;
            purchaseBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-on-primary-container inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processando...
            `;

            // Simula uma requisição AJAX para pagamento/leads
            setTimeout(() => {
                purchaseBtn.classList.remove("bg-primary-container", "text-on-primary-container");
                purchaseBtn.classList.add("bg-secondary-container", "text-on-secondary-container");
                purchaseBtn.innerHTML = `
                    <span class="material-symbols-outlined inline-block align-middle mr-2">check_circle</span>
                    Pedido Confirmado!
                `;

                // Efeito confete ou feedback premium adicional
                const feedbackMsg = document.createElement("div");
                feedbackMsg.className = "text-center text-secondary font-medium mt-4 animate-on-scroll is-visible";
                feedbackMsg.innerHTML = "Obrigado! Suas informações foram enviadas. Entraremos em contato em breve.";
                form.appendChild(feedbackMsg);

                // Reset do form após 5 segundos
                setTimeout(() => {
                    form.reset();
                    purchaseBtn.disabled = false;
                    purchaseBtn.classList.remove("bg-secondary-container", "text-on-secondary-container");
                    purchaseBtn.classList.add("bg-primary-container", "text-on-primary-container");
                    purchaseBtn.innerHTML = originalBtnText;
                    feedbackMsg.remove();
                    
                    // Reset da cor do relógio
                    if (colorOptions.length > 0) {
                        colorOptions[0].click();
                    }
                }, 5000);
            }, 2000);
        });
    }
}
