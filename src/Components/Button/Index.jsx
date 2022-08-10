import React, {useContext} from 'react'
import {BsSun,BsSunFill} from 'react-icons/bs'
import { ThemeContext } from '../../Context/ThemeContext'

const Index = () => {
    const {handleToggleIcon, isDarkTheme} = useContext(ThemeContext)
  return (
      <div>
          <button>Toggle theme</button>
      </div>
  )
}

export default Index