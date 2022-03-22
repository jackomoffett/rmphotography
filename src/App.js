import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Fees from "./pages/Fees";
import Prints from "./pages/Prints";
import Header from "./components/Header";

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
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/fees" component={Fees} />
        <Route exact path="/prints" component={Prints} />
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
