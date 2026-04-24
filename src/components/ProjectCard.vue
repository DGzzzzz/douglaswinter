<template>
  <div class="card">
    <h3 class="title">{{ title }}</h3>
    <p class="desc">{{ description }}</p>
    <div class="links">
      <a
        v-if="githubLink"
        :href="githubLink"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
      >
        <i class="ri-github-fill"></i>
        GitHub
      </a>
      <a
        v-if="vercelLink"
        :href="vercelLink"
        target="_blank"
        rel="noopener noreferrer"
        class="link link--demo"
      >
        <i class="ri-external-link-line"></i>
        Demo
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  githubLink?: string
  vercelLink?: string
}>()
</script>

<style scoped>
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px var(--shadow);
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px var(--shadow-hover);
  border-color: var(--accent);
}

.title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
}

.desc {
  font-size: 0.825rem;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}

.links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.775rem;
  font-weight: 500;
  background: var(--bg-icon);
  border: 1px solid var(--border);
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.link:hover {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.link--demo:hover {
  background: #0070f3;
  border-color: #0070f3;
}
</style>
