import React, { useContext } from 'react'
import Header from 'components/Header'
import { followers, overviews } from 'data'
import './App.scss'
import Overview from 'components/Overview'
import Followers from 'components/Followers'
import { THEME, ThemeContext } from 'context/theme'

function App() {
  const context = useContext(ThemeContext)

  return (
    <div className={`AppContainer ${context.theme === THEME.DARK && 'dark'}`}>
      <div className="inner-wrapper">
        <Header />

        <section className="FollowerSection">
          {followers.map((item) => (
            <Followers
              key={item.id}
              user={item.user}
              platform={item.platform}
              followers={item.followers}
              change={item.change}
            />
          ))}
        </section>

        <section className="OverviewSection">
          <h2 className="heading">Overview - Today</h2>
          <div className="overview-wrapper">
            {overviews.map((item) => (
              <Overview
                key={item.id}
                subject={item.subject}
                platform={item.platform}
                value={item.value}
                change={item.change}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
