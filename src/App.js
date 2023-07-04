import "./styles/App.css";
import "@fontsource/roboto/300.css";
import * as React from "react";
import Header from "./components/Header";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Bio />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}
