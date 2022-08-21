import { THEME, ThemeContext } from 'context/theme'
import React, { useContext } from 'react'
import './style.scss'

function Header() {
  const context = useContext(ThemeContext)
  return (
    <section className="HeaderSection">
      <div className={`brand ${context.theme === THEME.DARK && 'dark'}`}>
        <h1>Social Media Dashboard</h1>
        <div className="total-followers">Total Followers: 23,004</div>
      </div>

      <div className={`control-wrapper ${context.theme === THEME.DARK && 'dark'}`}>
        <div className="label">{context.theme === THEME.DARK ? 'Light' : 'Dark'} Mode</div>
        <div className={`theme-control`} onClick={context.toggleTheme}>
          <i className="indicator"></i>
        </div>
      </div>
    </section>
  )
}

export default Header
