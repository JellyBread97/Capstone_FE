import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import HomePage from "./components/HomePage";
import RecipesPage from "./components/RecipesPage";
import SettingsPage from "./components/SettingsPage";
import { useState } from "react";
import CocktailDetails from "./components/CocktailDetails";
import AddNewRecipe from "./components/AddNewRecipe";

const robotoFont = createTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

function App() {
  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0, 0, 0, 0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1,
  });
  const [theme, setTheme] = useState("light");
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  return (
    <ThemeProvider theme={robotoFont}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route
            path="/settings"
            element={
              <SettingsPage
                {...{
                  theme,
                  setTheme,
                  primaryColor,
                  setPrimaryColor,
                  fontSize,
                  setFontSize,
                  settings,
                  setSettings,
                  animationSpeed,
                  setAnimationSpeed,
                }}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/cocktail" element={<CocktailDetails />} />
          <Route path="/addNew" element={<AddNewRecipe />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
