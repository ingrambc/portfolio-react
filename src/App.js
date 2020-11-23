import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "reactstrap";
import styled from "styled-components";


function App() {
  return (
    <Router>
        <Header /> 
          <Route exact path="/portfolio" component={ Portfolio } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path={["/", "/about"]} component={ About } />
        <Footer />

    </Router>
  );
}

export default App;