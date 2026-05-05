<template>
  <main class="home">
    <div class="container">

      <section class="profile">
        <Avatar />
        <h1 class="name">Douglas Winter</h1>
        <span class="role">{{ t('developer') }}</span>
      </section>

      <SocialLinks />

      <div class="divider"></div>

      <section class="bio">
        <h2 class="section-label">{{ t('about_me') }}</h2>
        <p class="bio-text">{{ t('description') }}</p>
      </section>

      <section class="actions">
        <router-link to="/projetos" class="projects-btn">
          <i class="ri-folder-3-fill"></i>
          <span>{{ t('projects') }}</span>
          <i class="ri-arrow-right-s-line arrow-icon"></i>
        </router-link>
      </section>

      <div class="divider"></div>

      <section class="freelance">
        <h2 class="section-label">
          <i class="ri-briefcase-4-line freelance-icon"></i>
          {{ t('freelance_title') }}
        </h2>
        <p class="bio-text">{{ t('freelance_description') }}</p>
        <div class="contact-row">
          <a href="https://mail.google.com/mail/?view=cm&to=douglaswinter75@gmail.com" target="_blank" rel="noopener noreferrer" class="contact-btn">
            <i class="ri-mail-line"></i>
            <span>{{ t('freelance_cta') }}</span>
          </a>
          <span class="contact-email">douglaswinter75@gmail.com</span>
        </div>
      </section>

      <footer class="controls">
        <LanguageSwitcher />
        <ThemeToggle />
      </footer>

    </div>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Avatar from '../components/Avatar.vue'
import SocialLinks from '../components/SocialLinks.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import ThemeToggle from '../components/ThemeToggle.vue'

const { t } = useI18n()
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 3.5rem 1.25rem 2rem;
}

.container {
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.35rem;
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.role {
  font-size: 0.875rem;
  color: var(--accent);
  font-weight: 500;
}

.divider {
  height: 1px;
  background: var(--border);
  border-radius: 1px;
}

.section-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-secondary);
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.freelance-icon {
  font-size: 0.9rem;
  color: var(--accent);
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background: var(--accent);
  color: #fff;
  border-radius: 50px;
  font-size: 0.825rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.22s ease;
  box-shadow: 0 2px 10px var(--shadow);
}

.contact-btn:hover {
  opacity: 0.85;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-hover);
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;
}

.contact-email {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.bio-text {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.75;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.projects-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.95rem 1.5rem;
  background: var(--bg-btn);
  color: var(--text-btn);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.22s ease;
  box-shadow: 0 2px 10px var(--shadow);
  letter-spacing: 0.01em;
}

.projects-btn:hover {
  background: var(--bg-btn-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-hover);
}

.arrow-icon {
  margin-left: auto;
  font-size: 1.1rem;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 1rem;
}
</style>
