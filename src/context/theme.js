import { createContext, useState } from 'react'

const THEME = Object.freeze({
  DARK: 'dark',
  LIGHT: 'light',
})

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEME.LIGHT)

  const toggleTheme = () => {
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)
  }

  const value = {
    theme,
    toggleTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider, THEME }
