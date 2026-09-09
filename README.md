# ✦ Clínica Dorō | Landing Page Oficial

![Clínica Dorō](assets/icons/logo.png)

> **Beleza que liberta.**  
> Website institucional e landing page responsiva desenvolvida para a **Clínica Dorō**, especializada em tratamentos estéticos, dermatofuncionais, depilação a LED e protocolos de emagrecimento.

---

## 📌 Sobre o Projeto

Este projeto consiste em uma Landing Page moderna, de alta conversão e performance otimizada, desenvolvida sob medida para refletir a identidade visual sofisticada da marca (tons nude, areia e dourado).

### 🚀 Principais Funcionalidades

- **Design Responsivo & Mobile-First:** Experiência fluida em smartphones, tablets e desktops.
- **Identidade Visual Personalizada:** Paleta de cores premium com foco em elegância e legibilidade.
- **Galeria em Mosaico:** Exposição dinâmica de tratamentos e procedimentos.
- **Integração com WhatsApp:**
  - Botão flutuante fixo com notificação visual.
  - Formulário de agendamento que envia os dados preenchidos diretamente para o WhatsApp da clínica.
- **Menu Drawer Mobile:** Navegação limpa e intuitiva para dispositivos móveis.
- **Seção FAQ Interativa:** Sanfona nativa em HTML5 (`<details>` / `<summary>`) para dúvidas frequentes sem necessidade de bibliotecas pesadas.
- **SEO & Open Graph:** Metatags configuradas para indexação no Google e previews elegantes ao compartilhar links no WhatsApp e redes sociais.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semantic** - Estrutura otimizada para acessibilidade e SEO.
- **CSS3 Custom Variables (Design Tokens)** - Estilização modular sem dependência de frameworks pesados.
- **JavaScript Vanilla (ES6+)** - Interatividade leve, manipulação do DOM e integração de formulário.
- **Lucide Icons** - Biblioteca de ícones vetoriais modernos.
- **Google Fonts** - *Cormorant Garamond* (Serifada Elegante) & *Plus Jakarta Sans* (Sans-serif Urbana/Moderna).

---

## 📂 Estrutura de Arquivos

```microservices
clinicadoro/
├── index.html          # Estrutura principal da Landing Page
├── css/
│   └── style.css       # Estilos globais, variáveis de design e responsividade
├── js/
│   └── main.js         # Lógica do menu mobile, máscaras de input e envio para WhatsApp
└── assets/
    ├── icons/
    │   └── logo.png    # Logotipo da clínica
    ├── img/            # Mosaico de fotos e fotos da equipe
    │   ├── equipe.png
    │   ├── massagem.jpeg
    │   ├── resultados.jpeg
    │   ├── depilacao.jpeg
    │   └── agulha.jpeg
    └── video/
        └── tour.mp4     # Vídeo de apresentação/tour do espaço