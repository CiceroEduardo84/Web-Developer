import React, { createContext, useState, ReactNode } from "react";

type ThemeContext = {
  theme: string;
  toggleMode: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "darck" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
