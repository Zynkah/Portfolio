import "./styles/App.css";
import "@fontsource/roboto/300.css";
import * as React from "react";
import Header from "./components/Header";
import Nav from "./components/Navbar";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Tabs />
      <Footer />
    </div>
  );
}
