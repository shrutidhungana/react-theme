import React, {useContext} from 'react'
import {BsSun,BsSunFill} from 'react-icons/bs'
import { ThemeContext } from '../../Context/ThemeContext'

const Index = () => {
    const {handleToggleIcon, isDarkTheme} = useContext(ThemeContext)
  return (
      <div className = {isDarkTheme ? 'button-wrapper-dark':'button-wrapper-light'}>
          {
              isDarkTheme? <BsSun size= {32} onClick={handleToggleIcon} /> : <BsSunFill size= {32}  onClick={handleToggleIcon} />
         }
      </div>
  )
}

export default Index