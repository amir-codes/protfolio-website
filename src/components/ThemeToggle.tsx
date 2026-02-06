import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getStoredTheme, getSystemTheme, setTheme } from '../lib/theme'
import Button from './Button'

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => getStoredTheme() ?? getSystemTheme())

  useEffect(() => {
    setTheme(theme)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <Button
      type="button"
      variant="ghost"
      aria-label="Toggle theme"
      onClick={() => setThemeState(isDark ? 'light' : 'dark')}
      className="h-10 w-10 rounded-xl p-0"
      leftIcon={isDark ? <Sun size={18} /> : <Moon size={18} />}
    />
  )
}
