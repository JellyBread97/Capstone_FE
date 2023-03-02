import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import HomePage from "./components/HomePage";

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
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
