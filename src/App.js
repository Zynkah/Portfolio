import "./App.css";
import Footer from "./components/Footer";
import "@fontsource/roboto/300.css";
import * as React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Bio from "./components/Bio";

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
