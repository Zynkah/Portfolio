import "./styles/App.css";
import "@fontsource/roboto/300.css";
import * as React from "react";
import Header from "./components/Header";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Bio from "./Bio";
import Cards from "./Cards";
import Certifications from "./Certifications";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Bio />
      <Cards />
      <Certifications />
      <Footer />
    </div>
  );
}
