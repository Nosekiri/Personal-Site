'use client'
import * as React from 'react'
import { useTheme } from 'next-themes'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'
import { FaCircleHalfStroke } from 'react-icons/fa6'

const storageKey = 'theme-preference'

// ----------- ThemeProvider -----------
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem {...props}>
      {children}
    </NextThemesProvider>
  )
}

// ----------- ThemeSwitch -----------
export function ThemeSwitch() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [currentTheme, setCurrentTheme] = React.useState<'light' | 'dark'>('light')

  // --- Get user/system preference ---
  const getColorPreference = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      const storedPreference = localStorage.getItem(storageKey)
      if (storedPreference) return storedPreference as 'light' | 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  }

  // --- Apply theme visually ---
  const reflectPreference = React.useCallback(
    (theme: 'light' | 'dark') => {
      document.documentElement.classList.remove('bg-light', 'bg-dark')
      document.documentElement.classList.add(`bg-${theme}`)
      setCurrentTheme(theme)
      setTheme(theme)
    },
    [setTheme]
  )

  // --- Initialize theme on mount ---
  React.useEffect(() => {
    setMounted(true)
    const initTheme = getColorPreference()
    reflectPreference(initTheme)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? 'dark' : 'light'
      if (!localStorage.getItem(storageKey)) {
        reflectPreference(newTheme)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [reflectPreference])

  // --- Toggle manually ---
  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    localStorage.setItem(storageKey, newTheme)
    reflectPreference(newTheme)
  }

  return (
    <button
      id='theme-toggle'
      aria-label={`${currentTheme} mode`}
      onClick={toggleTheme}
      className='flex items-center justify-center transition-opacity duration-300 hover:opacity-90 cursor-pointer'
    >
      <FaCircleHalfStroke
        className={`h-[14px] w-[14px] ${
          currentTheme === 'dark' ? 'text-[#D4D4D4]' : 'text-[#1c1c1c]'
        }`}
      />
    </button>
  )
}
