import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "reactstrap";


function App() {
  return (
    <Router>
        <Header />
        {/* <Container>          
          <Route exact path="/portfolio" component={ Portfolio } />
          <Route exact path="/contact" component={ Contact } />
          <Route path="/" component={ About } />
        </Container> */}
        <Footer />

    </Router>
  );
}

export default App;