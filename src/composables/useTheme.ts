import { ref } from 'vue'

const isDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

if (isDark.value) {
  document.documentElement.setAttribute('data-theme', 'dark')
}

export function useTheme() {
  const toggle = () => {
    isDark.value = !isDark.value
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  }
  return { isDark, toggle }
}
