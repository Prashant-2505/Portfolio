'use client';

import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  // Check if the component is being rendered on the server.
  if (typeof window === "undefined") {
    return { theme: true, setTheme: () => {} };
  }

  // Otherwise, return the theme context.
  return useContext(ThemeContext);
};
