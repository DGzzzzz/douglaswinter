import { createI18n } from 'vue-i18n'

export default createI18n({
  legacy: false,
  locale: 'pt',
  messages: {
    en: {
      about_me: 'About me',
      description:
        "Hi! I'm Douglas Winter, developer and QA Analyst. I study Systems Analysis and Development at the Federal Institute of RS. In quality assurance, I work with manual testing, API validation with Postman, and critical flow mapping. In development, I have experience with Java, Spring Boot and SQL on the backend, TypeScript with React, Next.js and Vue on the frontend, Flutter for mobile.",
      freelance_title: 'Available for Freelance',
      freelance_description:
        "I'm open to freelance projects — web development, mobile apps, API integrations, or test automation. If you have a project in mind, feel free to reach out.",
      freelance_cta: 'Get in touch',
      developer: 'Developer & QA Analyst',
      projects: 'Projects',
      back: 'Back',
      project_titles: {
        medicamentos_pets: 'Pet Medications',
        almoexpert: 'Almoexpert — Regression Test Suite',
        efood: 'Efood',
        focalpoint: 'FocalPoint',
        todo_fullstack: 'ToDo FullStack',
        exoplanets: 'Exoplanets Exploration — NASA Hackathon',
      },
      project_descriptions: {
        medicamentos_pets:
          'Application for managing pet medications. Built with Flutter, Dart and Supabase.',
        almoexpert:
          'Automated regression testing suite for the Almoexpert software. Built with Java, Selenium, and JUnit.',
        efood:
          'Restaurant e-commerce where you can view menus and place orders. Built with React, Redux, styled-components, and TypeScript.',
        focalpoint:
          'Task manager with state management for registering, deleting, and completing tasks. Built with React, SCSS, Next.js, and TypeScript.',
        todo_fullstack:
          'Full-stack task list app with a Node.js/Express backend and HTML/CSS/JS frontend. Docker was used for a MySQL image.',
        exoplanets:
          'Web app that consumes the NASA API to display exoplanet information. Built with Three.js and Vite.'
      }
    },
    pt: {
      about_me: 'Sobre mim',
      description:
        'Olá! Sou Douglas Winter, desenvolvedor e Analista de QA. Curso Análise e Desenvolvimento de Sistemas no Instituto Federal do RS. Na área de qualidade, atuo com testes manuais, validação de APIs com Postman e mapeamento de fluxos críticos. No desenvolvimento, tenho experiência com Java, Spring Boot e SQL no back-end, TypeScript com React, Next.js e Vue no front-end, Flutter para mobile.',
      freelance_title: 'Disponível para Freelance',
      freelance_description:
        'Estou aberto a projetos freelance — desenvolvimento web, apps mobile, integrações de API ou automação de testes. Se você tem um projeto em mente, fique à vontade para entrar em contato.',
      freelance_cta: 'Entrar em contato',
      developer: 'Desenvolvedor & Analista de QA',
      projects: 'Projetos',
      back: 'Voltar',
      project_titles: {
        medicamentos_pets: 'Medicamentos para Pets',
        almoexpert: 'Almoexpert — Bateria de Testes de Regressão',
        efood: 'Efood',
        focalpoint: 'FocalPoint',
        todo_fullstack: 'ToDo FullStack',
        exoplanets: 'Exoplanets Exploration — Hackathon NASA',
      },
      project_descriptions: {
        medicamentos_pets: 'Aplicativo para gerenciamento de medicamentos para pets. Desenvolvido com Flutter, Dart e Supabase.',
        almoexpert:
          'Bateria de testes de regressão automatizados para o software Almoexpert. Desenvolvida com Java, Selenium e JUnit.',
        efood:
          'E-commerce de restaurantes onde podemos visualizar o cardápio e fazer pedidos. Desenvolvido com React, Redux, styled-components e TypeScript.',
        focalpoint:
          'Gerenciamento de estado para cadastro de tarefas, exclusão e marcar como concluída. Desenvolvido com React, SCSS, Next.js e TypeScript.',
        todo_fullstack:
          'Aplicação web de lista de tarefas, com backend Node.js/Express e frontend com HTML, CSS e JS. Utilizado Docker para gerar imagem do MySQL.',
        exoplanets:
          'Aplicação web que consome a API da NASA para exibir informações sobre exoplanetas. Construída com Three.js e Vite.'
      }
    }
  }
})
