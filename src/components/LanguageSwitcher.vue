<template>
  <button class="lang-btn" @click="switchLang">
    {{ locale === 'pt' ? 'EN' : 'PT' }}
  </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const switchLang = () => {
  locale.value = locale.value === 'pt' ? 'en' : 'pt'
}
</script>

<style scoped>
.lang-btn {
  background: var(--bg-icon);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 0.35rem 0.9rem;
  cursor: pointer;
  color: var(--text-primary);
  font-size: 0.75rem;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: 0.08em;
  transition: all 0.2s ease;
}

.lang-btn:hover {
  background: var(--bg-icon-hover);
  border-color: var(--accent);
  color: var(--accent);
}
</style>
