<template>
  <main class="projects">
    <div class="container">

      <div class="header">
        <router-link to="/" class="back-btn">
          <i class="ri-arrow-left-s-line"></i>
          {{ t('back') }}
        </router-link>
        <h1 class="title">{{ t('projects') }}</h1>
      </div>

      <div class="grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.key"
          :title="t(project.titleKey)"
          :description="t(project.descKey)"
          :github-link="project.github"
          :vercel-link="project.vercel"
        />
      </div>

      <footer class="controls">
        <LanguageSwitcher />
        <ThemeToggle />
      </footer>

    </div>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProjectCard from '../components/ProjectCard.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import ThemeToggle from '../components/ThemeToggle.vue'

const { t } = useI18n()

const projects = [
  {
    key: 'almoexpert',
    titleKey: 'project_titles.almoexpert',
    descKey: 'project_descriptions.almoexpert',
    github: 'https://github.com/DGzzzzz/projeto_almoexpert'
  },
  {
    key: 'efood',
    titleKey: 'project_titles.efood',
    descKey: 'project_descriptions.efood',
    github: 'https://github.com/DGzzzzz/efood',
    vercel: 'https://dg-efood.vercel.app/'
  },
  {
    key: 'focalpoint',
    titleKey: 'project_titles.focalpoint',
    descKey: 'project_descriptions.focalpoint',
    github: 'https://github.com/DGzzzzz/legaplan',
    vercel: 'https://dg-focalpoint.vercel.app/'
  },
  {
    key: 'exoplanets',
    titleKey: 'project_titles.exoplanets',
    descKey: 'project_descriptions.exoplanets',
    github: 'https://github.com/DGzzzzz/Hackathon-NASA',
    vercel: 'https://exoplanets-exploration.vercel.app'
  },
  {
    key: 'todo_fullstack',
    titleKey: 'project_titles.todo_fullstack',
    descKey: 'project_descriptions.todo_fullstack',
    github: 'https://github.com/DGzzzzz/ToDo-FullStack'
  },
  {
    key: 'login_api',
    titleKey: 'project_titles.login_api',
    descKey: 'project_descriptions.login_api',
    github: 'https://github.com/DGzzzzz/login'
  }
]
</script>

<style scoped>
.projects {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 3rem 1.25rem 2rem;
}

.container {
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 500;
  transition: opacity 0.2s;
  width: fit-content;
}

.back-btn:hover {
  opacity: 0.7;
}

.back-btn i {
  font-size: 1.1rem;
}

.title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 1rem;
}

@media (max-width: 540px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
