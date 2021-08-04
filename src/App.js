import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
        <Header />
        <Wrapper>
          <Route exact path="/portfolio-react/portfolio" component={ Portfolio } />
          <Route exact path="/portfolio-react/contact" component={ Contact } />
          <Route exact path="/portfolio-react/about" component={ About } />
          <Route exact path="/portfolio-react" component={ About } />
        </Wrapper> 
        <Footer />

    </Router>
  );
}

export default App;