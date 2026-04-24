import { createI18n } from 'vue-i18n'

export default createI18n({
  legacy: false,
  locale: 'pt',
  messages: {
    en: {
      about_me: 'About me',
      description:
        "Hi! I'm Douglas Winter, a developer passionate about technology. I currently work as a QA Analyst and am studying Systems Analysis and Development at the Federal Institute of RS. I have experience with Java, Spring, JPA, and SQL, and I'm continuously developing my full-stack skills with TypeScript, React, and Vue.",
      join_discord: 'Discord community',
      community_discord:
        "Join the community I'm building on Discord. There we can exchange ideas, clear up doubts, and connect with other people. Click the Discord icon to join.",
      developer: 'Developer & QA Analyst',
      projects: 'Projects',
      back: 'Back',
      project_titles: {
        almoexpert: 'Almoexpert — Regression Test Suite',
        efood: 'Efood',
        focalpoint: 'FocalPoint',
        todo_fullstack: 'ToDo FullStack',
        exoplanets: 'Exoplanets Exploration — NASA Hackathon',
        login_api: 'Login API'
      },
      project_descriptions: {
        almoexpert:
          'Automated regression testing suite for the Almoexpert software. Built with Java, Selenium, and JUnit.',
        efood:
          'Restaurant e-commerce where you can view menus and place orders. Built with React, Redux, styled-components, and TypeScript.',
        focalpoint:
          'Task manager with state management for registering, deleting, and completing tasks. Built with React, SCSS, Next.js, and TypeScript.',
        todo_fullstack:
          'Full-stack task list app with a Node.js/Express backend and HTML/CSS/JS frontend. Docker was used for a MySQL image.',
        exoplanets:
          'Web app that consumes the NASA API to display exoplanet information. Built with Three.js and Vite.',
        login_api:
          'REST API with JWT authentication, MVC architecture, and PostgreSQL. Built with Java and Spring Boot.'
      }
    },
    pt: {
      about_me: 'Sobre mim',
      description:
        'Olá! Sou Douglas Winter, desenvolvedor apaixonado por tecnologia. Atualmente trabalho como Analista de QA e curso Análise e Desenvolvimento de Sistemas no Instituto Federal do RS. Tenho experiência com Java, Spring, JPA e SQL, e sigo desenvolvendo habilidades no full-stack com TypeScript, React e Vue.',
      join_discord: 'Comunidade do Discord',
      community_discord:
        'Junte-se na comunidade que estou construindo no Discord. Lá podemos trocar uma ideia, tirar dúvidas e se conectar com outras pessoas. Clique no ícone do Discord para entrar.',
      developer: 'Desenvolvedor & Analista de QA',
      projects: 'Projetos',
      back: 'Voltar',
      project_titles: {
        almoexpert: 'Almoexpert — Bateria de Testes de Regressão',
        efood: 'Efood',
        focalpoint: 'FocalPoint',
        todo_fullstack: 'ToDo FullStack',
        exoplanets: 'Exoplanets Exploration — Hackathon NASA',
        login_api: 'Login API'
      },
      project_descriptions: {
        almoexpert:
          'Bateria de testes de regressão automatizados para o software Almoexpert. Desenvolvida com Java, Selenium e JUnit.',
        efood:
          'E-commerce de restaurantes onde podemos visualizar o cardápio e fazer pedidos. Desenvolvido com React, Redux, styled-components e TypeScript.',
        focalpoint:
          'Gerenciamento de estado para cadastro de tarefas, exclusão e marcar como concluída. Desenvolvido com React, SCSS, Next.js e TypeScript.',
        todo_fullstack:
          'Aplicação web de lista de tarefas, com backend Node.js/Express e frontend com HTML, CSS e JS. Utilizado Docker para gerar imagem do MySQL.',
        exoplanets:
          'Aplicação web que consome a API da NASA para exibir informações sobre exoplanetas. Construída com Three.js e Vite.',
        login_api:
          'API REST com autenticação JWT, arquitetura MVC e PostgreSQL. Desenvolvida com Java e Spring Boot.'
      }
    }
  }
})
