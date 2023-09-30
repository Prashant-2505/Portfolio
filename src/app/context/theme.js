'use client';

import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: true, setTheme: () => {} });

export default function ThemeContextProvider ({ children }) {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
