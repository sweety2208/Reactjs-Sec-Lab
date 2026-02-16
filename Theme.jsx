import React, { useState } from 'react';

function Theme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const containerStyle = {
    minHeight: "100vh",
    padding: "10px",
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <div style={containerStyle}>
      <h1>Theme Toggle Example</h1>
      <p>Click the button to switch between Light and Dark mode.</p>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div style={{ marginTop: "20px" }}>
        <p>Text color also changes according to the selected theme.</p>
      </div>
    </div>
  );
}

export default Theme;
