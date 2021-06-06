import "./App.css";

import Home from "./pages/Home";
import Dogs from "./pages/Dogs";
import Horses from "./pages/Horses";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path="/:page" component={Header} />
        <Route exact path="/" component={Header} /> */}

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dogs" component={Dogs} />
        <Route exact path="/horses" component={Horses} />
        <Route exact path="/gallery" component={Gallery} />
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
