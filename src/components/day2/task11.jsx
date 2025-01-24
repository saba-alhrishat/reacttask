import React, { useState } from "react";

function ThemeToggler() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      style={{
    
        backgroundColor: isDark ? "red" : "pink",
      }}
    >
      <h1>{isDark ? "lam red " : "lam pink"}</h1>
      <button
        onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggler;
