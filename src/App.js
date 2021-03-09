import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import Portfolio from "./containers/Portfolio/Portfolio";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Contact from "./containers/Contact/Contact"

function App() {
  
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <About />

      <Footer />
    </div>
  );
}

export default App;
