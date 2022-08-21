import React, { useContext } from 'react'
import upIcon from 'images/icon-up.svg'
import downIcon from 'images/icon-down.svg'
import { socialIconEnum } from 'data'
import './style.scss'
import { THEME, ThemeContext } from 'context/theme'
import { abbreviateNumber } from 'helpers'

function Followers(props) {
  const { user = 'John Doe', platform = 'facebook', followers = 0, change = 0 } = props
  const context = useContext(ThemeContext)

  return (
    <div className={`followers-card ${platform} ${context.theme === THEME.DARK && 'dark'}`}>
      <div className="user">
        <img src={socialIconEnum[platform].image} alt={socialIconEnum[platform].value} />
        <div className="name">{user}</div>
      </div>

      <div className="followers">
        <div className="figure">{abbreviateNumber(followers)}</div>
        <div className="unit">followers</div>
      </div>

      <div className={`change ${change > 0 ? 'rise' : change < 0 ? 'fall' : ''}`}>
        {change > 0 ? (
          <img src={upIcon} alt="rise" />
        ) : change < 0 ? (
          <img src={downIcon} alt="fall" />
        ) : (
          <></>
        )}
        <span className="figure">{Math.abs(change)}</span>
        <span className="time">Today</span>
      </div>
    </div>
  )
}

export default Followers
