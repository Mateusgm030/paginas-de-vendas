# ⌚ HOROS ELITE - Página de Vendas Premium

Página de vendas de alta performance e conversão desenvolvida para o smartwatch **HOROS ELITE**, sob as especificações do sistema de design **Chronos Precision**. O projeto foi estruturado com foco em velocidade de carregamento, responsividade, SEO avançado e experiência visual premium.

---

## 🚀 Tecnologias Utilizadas

*   **HTML5 Semântico**: Estrutura robusta focada em acessibilidade (a11y) e SEO.
*   **Tailwind CSS (via CDN)**: Estilização rápida e responsiva por meio de classes utilitárias.
*   **CSS3 (Vanilla)**: Variáveis CSS e animações customizadas isoladas para uma separação clara de preocupações.
*   **JavaScript (Vanilla)**: Lógica interativa para o menu mobile, formulário de checkout dinâmico e animações de scroll baseadas em `IntersectionObserver`.

---

## 🎨 Características do Design System (Chronos Precision)

Conforme documentado no [DESIGN.md](DESIGN.md), o projeto segue um estilo **Modern Corporate** com detalhes **Minimalistas**:

*   **Cores**: Base "True Dark" (Fundo `#0b1326`) combinada com Azul Elétrico (`#00f5ff` / `#e9feff`) para ações e conexões, e Verde Vibrante (`#4ae176`) para saúde e dados positivos.
*   **Tipografia**: Montserrat para headlines marcantes e Inter para o corpo e especificações técnicas.
*   **Bordas e Elevação**: Cantos levemente arredondados (`4px` a `8px`) e profundidade construída com tonalidades sobrepostas (Tonal Layering), sem sombras pesadas.
*   **Efeitos**: Glassmorphism com desfoque de fundo (backdrop-filter) e bordas internas brancas translúcidas de 10% de opacidade nos cartões de saúde.

---

## 📁 Estrutura de Pastas

A estrutura do projeto está organizada para produção:

```text
/ (raiz do repositório)
├── assets/
│   └── screen.png             # Recursos de imagem do smartwatch
├── css/
│   └── style.css              # Variáveis CSS, resets, painel de vidro e animações
├── js/
│   ├── tailwind-config.js     # Configurações de cores e fontes do Tailwind
│   └── app.js                 # Lógica de interatividade (menu, checkout, scroll)
├── old/
│   └── code.html              # Backup do código legado gerado via Stitch
├── index.html                 # Página principal refatorada e otimizada
├── package.json               # Metadados e informações do projeto
├── DESIGN.md                  # Especificação original do Design System
└── README.md                  # Documentação do projeto
```

---

## 📈 Melhorias e Performance

1.  **Separação de Preocupações**: Código CSS e configurações JavaScript do Tailwind foram completamente desacoplados do HTML.
2.  **Animações 60fps**: Em vez de frameworks robustos (como Framer Motion), as animações de scroll e entrada em cascata foram criadas utilizando a API nativa `IntersectionObserver` integrada com transições CSS, garantindo impacto zero no Core Web Vitals e Lighthouse score máximo.
3.  **Acessibilidade e SEO**: Menu responsivo compatível com leitores de tela (tags `aria-*`) e aplicação rigorosa da hierarquia de cabeçalhos (`h1`, `h2`, `h3`).
4.  **Interações Premium**: Transição de foco nos campos de input no checkout (borda azul ao focar) e resposta de toque física nos botões (escala para 98% ao pressionar).

---

## 💻 Como Executar Localmente

Como a aplicação é totalmente estática e otimizada, nenhuma ferramenta de compilação ou build pesado é necessária:

1.  Clone este repositório.
2.  Abra o arquivo `index.html` diretamente em seu navegador padrão.
3.  *(Opcional)* Se desejar servir a aplicação em um servidor local:
    *   Com Node.js instalado, você pode executar:
        ```bash
        npx live-server
        ```
    *   Ou utilizar a extensão **Live Server** diretamente no VS Code.

---

## 🛠️ Publicação no GitHub

Para conectar este projeto local ao seu repositório remoto no GitHub e realizar a publicação, execute os seguintes passos no seu terminal:

```bash
# 1. Adicionar o repositório remoto
git remote add origin https://github.com/Mateusgm030/paginas-de-vendas.git

# 2. Definir a branch padrão para main (caso não seja a principal)
git branch -M main

# 3. Enviar as alterações para o repositório remoto
git push -u origin main
```

---

## 📄 Licença

Este projeto é de uso livre e sob a licença MIT. Desenvolvido por [Mateusgm030](https://github.com/Mateusgm030).
