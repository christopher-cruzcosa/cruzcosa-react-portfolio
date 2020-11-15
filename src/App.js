import React from "react";
import { HashRouter, Route} from "react-router-dom";
import Front from "./pages/Front";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div style={{ backgroundColor: "#011A27" }}>
      <Navbar/>
      <Wrapper>
        <Route exact path="/">
          <Front/>
        </Route>
        <Route path="/front">
          <Front/>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        </Wrapper>
        <Footer/>
        </div>
    </HashRouter>
  );
}

export default App;
