<template>
  <button
    class="theme-btn"
    @click="toggle"
    :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
  >
    <i :class="isDark ? 'ri-sun-line' : 'ri-moon-line'"></i>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { isDark, toggle } = useTheme()
</script>

<style scoped>
.theme-btn {
  background: var(--bg-icon);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-primary);
  font-size: 1.1rem;
  transition: all 0.2s ease;
}

.theme-btn:hover {
  background: var(--bg-icon-hover);
  border-color: var(--accent);
  color: var(--accent);
}
</style>
