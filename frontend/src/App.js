import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import HomePage from "./components/HomePage";
import RecipesPage from "./components/RecipesPage";
import SettingsPage from "./components/SettingsPage";
import Navbar from "./components/Navbar";

const robotoFont = createTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={robotoFont}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
