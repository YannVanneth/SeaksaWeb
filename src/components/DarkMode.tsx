import React, { useState, useEffect } from "react";
import { MdWbSunny } from "react-icons/md";
import { RiMoonClearLine } from "react-icons/ri";

// Theme mode enum
enum ThemeMode {
  Dark = "dark",
  Light = "light",
}

// DarkMode component
export const DarkMode = () => {

  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem("ThemeMode") as ThemeMode) || ThemeMode.Dark;
  });

  useEffect(() => {
    if (theme === ThemeMode.Dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Function to toggle theme
  const toggleThemeMode = () => {
    const newTheme = theme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;
    setTheme(newTheme);
    localStorage.setItem("ThemeMode", newTheme);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Dark Mode Button */}
      <button onClick={toggleThemeMode}>
        {theme === ThemeMode.Dark ? (
          <MdWbSunny className="text-2xl" color="white"/>
        ) : (
          <RiMoonClearLine className="text-2xl" />
        )}
      </button>
    </div>
  );
};
