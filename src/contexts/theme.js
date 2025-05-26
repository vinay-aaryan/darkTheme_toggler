import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: 'light', 
  darkTheme : () => {},   
  lightTheme : () => {},   
})


export const ThemeProvider = ThemeContext.Provider
// this is custom hook we created bcz we don't need to import all thing indivudally 
export function useTheme(){
  return useContext(ThemeContext)
}