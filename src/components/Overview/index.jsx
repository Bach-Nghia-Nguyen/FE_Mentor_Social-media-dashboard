import React, { useContext } from 'react'
import upIcon from 'images/icon-up.svg'
import downIcon from 'images/icon-down.svg'
import { socialIconEnum } from 'data'
import './style.scss'
import { THEME, ThemeContext } from 'context/theme'
import { abbreviateNumber } from 'helpers'

function Overview(props) {
  const { subject = 'Page Views', platform = 'facebook', value = 0, change = '0%' } = props
  const changeInNumber = +change.replace('%', '')
  const context = useContext(ThemeContext)

  return (
    <div className={`overview-card ${context.theme === THEME.DARK && 'dark'}`}>
      <div className="head">
        <div className="subject">{subject}</div>
        <img src={socialIconEnum[platform].image} alt={socialIconEnum[platform].value} />
      </div>

      <div className="foot">
        <div className="value">{abbreviateNumber(value)}</div>
        <div className={`change ${changeInNumber > 0 ? 'rise' : changeInNumber < 0 ? 'fall' : ''}`}>
          {changeInNumber > 0 ? (
            <img src={upIcon} alt="rise" />
          ) : changeInNumber < 0 ? (
            <img src={downIcon} alt="fall" />
          ) : (
            <></>
          )}
          <span>{Math.abs(changeInNumber)}%</span>
        </div>
      </div>
    </div>
  )
}

export default Overview
