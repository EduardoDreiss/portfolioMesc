Mesc Portfolio

> Um portfólio artístico desenvolvido em Flask, com gerenciamento dinâmico de obras e arquitetura preparada para futura expansão como catálogo de e-commerce.

---

Sobre o Projeto

O Mesc Portfolio é uma aplicação web desenvolvida com o objetivo de apresentar o trabalho de uma artista de forma profissional, elegante e responsiva.

O projeto foi concebido priorizando a experiência visual, permitindo que visitantes naveguem pelas obras, conheçam a autora e obtenham informações detalhadas sobre cada trabalho.

Embora possua uma arquitetura preparada para evolução em um sistema de comércio eletrônico, sua versão atual possui foco exclusivo na exposição das obras e no contato entre visitantes e artista.

---

Principais Funcionalidades

- Página inicial com Hero Section personalizada
- Galeria dinâmica de obras
- Página individual para cada obra
- Informações sobre a artista
- Página de contato
- Painel administrativo para gerenciamento do conteúdo
- Upload de imagens
- Destaque de obras
- Layout responsivo
- SEO Friendly
- Templates dinâmicos utilizando Jinja2

---
Tecnologias Utilizadas

Backend

- Python 3
- Flask
- SQLAlchemy
- Flask-Migrate
- Flask-Login
- Jinja2

### Frontend

- HTML5
- CSS3
- JavaScript

Banco de Dados

- SQLite (desenvolvimento)

---

Estrutura do Projeto

```text
portfolio/
│
├── app/
│   ├── admin/
│   ├── auth/
│   ├── portfolio/
│   ├── static/
│   │   ├── css/
│   │   ├── images/
│   │   ├── js/
│   │   └── uploads/
│   │
│   ├── templates/
│   │
│   ├── models.py
│   ├── routes.py
│   └── __init__.py
│
├── migrations/
├── instance/
├── config.py
├── requirements.txt
└── run.py
```

---

Arquitetura

O projeto segue uma arquitetura modular utilizando **Blueprints** do Flask.

Cada módulo é responsável por uma funcionalidade específica, facilitando manutenção, escalabilidade e organização do código.

A aplicação também utiliza:

- Factory Pattern (`create_app()`)
- ORM SQLAlchemy
- Templates Jinja2
- Organização por responsabilidades

---

Objetivos do Projeto

O sistema possui dois objetivos principais.

Portfólio

- Apresentação das obras
- Organização em galeria
- Exibição de detalhes individuais
- Divulgação da artista

Catálogo

A arquitetura foi planejada para permitir futuramente:

- Venda de obras
- Catálogo comercial
- Controle de disponibilidade
- Integração com meios de pagamento

Essas funcionalidades ainda não fazem parte da versão atual.

---

Gerenciamento de Conteúdo

O conteúdo do site é totalmente dinâmico.

As obras são armazenadas em banco de dados e exibidas automaticamente na aplicação.

Cada obra possui informações como:

- título
- descrição
- categoria
- imagem principal
- destaque

Novas obras podem ser adicionadas sem necessidade de alterar o código-fonte.

---

Design

O layout foi desenvolvido do zero.

Características:

- Design minimalista
- Alto contraste
- Tipografia editorial
- Responsividade
- Paleta personalizada
- Componentes reutilizáveis
- Sistema de Design baseado em CSS Variables

---

Responsividade

O projeto adapta automaticamente seu layout para diferentes dispositivos.

Suporte para:

- Desktop
- Notebook
- Tablet
- Smartphones

---
Como executar

Clone o projeto

```bash
git clone https://github.com/SEU-USUARIO/portfolio.git
```

Entre na pasta

```bash
cd portfolio
```

Crie um ambiente virtual

Windows

```bash
python -m venv .venv
```

Ative

```bash
.venv\Scripts\activate
```

Linux / macOS

```bash
python3 -m venv .venv

source .venv/bin/activate
```

Instale as dependências

```bash
pip install -r requirements.txt
```

Execute

```bash
python run.py
```

---

Dependências

As principais bibliotecas utilizadas são:

- Flask
- Flask-SQLAlchemy
- Flask-Migrate
- Flask-Login

Consulte `requirements.txt` para a lista completa.

---

Banco de Dados

A aplicação utiliza SQLAlchemy como ORM.

Durante o desenvolvimento foi utilizado SQLite.

A arquitetura permite migração para bancos como:

- PostgreSQL
- MySQL
- MariaDB

sem alterações significativas na aplicação.

---

Segurança

O sistema foi desenvolvido considerando boas práticas como:

- Hash de senhas
- Autenticação de usuários
- Proteção de áreas administrativas
- Organização modular
- Separação entre lógica e apresentação

Por motivos de segurança, detalhes internos da aplicação não são divulgados neste repositório.

---

Próximas Funcionalidades

Planejadas para versões futuras:

- Busca por obras
- Filtro por categorias
- Upload múltiplo de imagens
- Sistema de favoritos
- Blog
- Área do cliente
- Newsletter
- Integração com e-commerce
- Carrinho de compras
- Gateway de pagamento
- Dashboard com estatísticas

---

Aprendizados

Durante o desenvolvimento foram estudados conceitos como:

- Arquitetura MVC
- Factory Pattern
- Blueprints
- ORM
- Templates dinâmicos
- Responsividade
- Organização de projetos Flask
- Design Systems
- Clean Code
- Boas práticas em CSS

---

Autor

Desenvolvido por *Eduardo Reis*.

Projeto desenvolvido para fins de estudo, prática de desenvolvimento web e construção de portfólio profissional.

---
Licença

Este projeto é disponibilizado apenas para fins educacionais e de demonstração.

Todos os direitos das obras artísticas pertencem à autora.
