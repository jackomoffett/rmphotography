import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/:page" component={Header} />
        <Route exact path="/" component={Header} />

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
