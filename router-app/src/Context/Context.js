/*import {createContext , useContext} from 'react'

export const TheamContext =createContext({
  theamMode: "light",
  lightTheam: ()=>{}
  darkTheam: ()=>{}
  });
  export TheamProvider= TheamContext.Provider
  
  export function useTheam(){
   return useContext(TheamContext);
  }
  *//*
  import { createContext, useContext } from 'react';

// ✅ Proper object with default values
export const ThemeContext = createContext({
  themeMode: 'light',
  lightTheme: () => {},
  darkTheme: () => {}
});

// ✅ Named export for Provider
export const ThemeProvider = ThemeContext.Provider;

// ✅ Custom hook to access context
export function useTheme() {
  return useContext(ThemeContext);
}
*/

import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  themeMode: 'light',
  lightTheme: () => {},
  darkTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  return useContext(ThemeContext);
}