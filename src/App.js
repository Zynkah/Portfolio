import "./App.css";
import Footer from "./components/Footer";
import "@fontsource/roboto/300.css";
import * as React from "react";
import { Typography } from "@mui/material";
import Cards from "./components/Cards";
import Bio from "./components/Bio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Zena Creps</Typography>
      </header>
      <Bio />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
