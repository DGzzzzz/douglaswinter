<template>
  <main class="projects">
    <div class="container">

      <div class="header">
        <router-link to="/" class="back-btn">
          <i class="ri-arrow-left-s-line"></i>
          {{ t('back') }}
        </router-link>
        <div class="title-row">
          <h1 class="title">{{ t('projects') }}</h1>
          <div class="controls">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
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
    key: 'medicamentos_pets',
    titleKey: 'project_titles.medicamentos_pets',
    descKey: 'project_descriptions.medicamentos_pets',
    github: 'https://github.com/DGzzzzz/app_medicamentos_pets'
  },
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

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  align-items: center;
  gap: 0.75rem;
}

@media (max-width: 540px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
