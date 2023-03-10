import { createContext, useEffect, useReducer } from "react";

export const themeContext = createContext();

const initialState = { darkMode: localStorage.getItem('theme')? JSON.parse(localStorage.getItem('theme')): true  };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
        return { darkMode: !state.darkMode };
      default:
        return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  useEffect(()=>{
    localStorage.setItem("theme", JSON.stringify(initialState.darkMode))
  }, [initialState.darkMode])
  return (
    <themeContext.Provider value={{state, dispatch}}>{props.children}</themeContext.Provider>
  );
};
