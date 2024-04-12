"use client";
import {createContext, useState, useEffect} from "react";
import {ConfigProvider, theme} from "antd";

export const ThemeContext = createContext<{
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export default function ThemeProvider({children}: {children: React.ReactNode}) {
  const [isDarkMode, setIsDarkMode] = useState(
    () => typeof window !== 'undefined' && localStorage.getItem("isDarkMode") === "true" || false
  );

  const {defaultAlgorithm, darkAlgorithm} = theme;

  useEffect(() => {
    localStorage.setItem("isDarkMode", String(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
