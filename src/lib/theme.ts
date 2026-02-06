export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

export function getStoredTheme(): Theme | null {
  const t = localStorage.getItem(STORAGE_KEY)
  return t === 'dark' || t === 'light' ? t : null
}

export function getSystemTheme(): Theme {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
  root.style.colorScheme = theme
}

export function initTheme() {
  // Prevent flash: choose stored theme first, else system theme.
  if (typeof window === 'undefined') return
  const stored = getStoredTheme()
  applyTheme(stored ?? getSystemTheme())
}

export function setTheme(theme: Theme) {
  localStorage.setItem(STORAGE_KEY, theme)
  applyTheme(theme)
}

export function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  setTheme(current === 'dark' ? 'light' : 'dark')
}
