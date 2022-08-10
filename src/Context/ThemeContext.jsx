import React, {createContext, useState} from 'react'



const themes = {
    dark: {
        backgroundColor: "#000000",
        color: "#ffffff"
    },
    light: {
        backgroundColor: "#ffffff",
        color: "#000000"
    },
}

const initialState = {
    theme: themes.light,
    handleToggleIcon: () => { },
    isDark: false
}


const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    
    const handleToggleIcon = () =>{}
    return (
        <ThemeContext.Provider value = {{themes,handleToggleIcon,isDark}}>
           {children} 
        </ThemeContext.Provider>
    )
}

export default ThemeProvider