# Portfolio — Douglas Winter

Repositório do meu portfólio pessoal. Layout no estilo link-tree, apresentando minhas informações profissionais, redes sociais e projetos. Desenvolvido com Vue 3 e Vite.

## Tecnologias

- **Vue 3** — Composition API com `<script setup>`
- **Vite** — Bundler e servidor de desenvolvimento
- **TypeScript** — Tipagem estática
- **Vue Router** — Navegação entre páginas (hash history)
- **Vue I18n** — Internacionalização (PT-BR / EN)
- **CSS custom properties** — Tema claro/escuro via variáveis CSS

## Funcionalidades

- Tema claro e escuro com detecção automática da preferência do sistema
- Alternância de idioma entre PT-BR e EN
- Página de projetos acessível via botão na página principal
- Layout responsivo

## Estrutura

```
src/
├── components/       # Avatar, SocialLinks, LanguageSwitcher, ThemeToggle, ProjectCard
├── composables/      # useTheme (estado global do tema)
├── i18n/             # Traduções PT-BR e EN
├── pages/            # Home, Projects
├── router/           # Configuração de rotas
└── styles/           # CSS global e variáveis de tema
```

## Scripts

```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview do build
npm run typecheck  # Verificação de tipos TypeScript
```
