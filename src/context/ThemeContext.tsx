import { createContext } from "react";
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
