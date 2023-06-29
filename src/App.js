import "./styles/App.css";
import "@fontsource/roboto/300.css";
import * as React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Cards from "./components/Cards";
import Certifications from "./components/Certifications";


function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Cards />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
