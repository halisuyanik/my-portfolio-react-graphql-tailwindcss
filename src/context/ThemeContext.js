import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const ThemeContext=createContext();

function ThemeProvider(props){
    const [darkMode, setDarkMode]=useState(false);
    useEffect(()=>{
        if(localStorage.getItem('theme')){
            setDarkMode(localStorage.getItem('theme'));
        }

    },[])

    const toggleDarkMode=()=>{
        setDarkMode(!darkMode);
        localStorage.setItem('theme', !darkMode)
    }
    return(
        <div>
            <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}

export {ThemeContext, ThemeProvider};