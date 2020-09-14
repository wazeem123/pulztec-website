import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./comp/Home";
import About from "./comp/About";
import Contact from "./comp/Contacts";
import Career from "./comp/Careers";
import Banking from "./comp/banking";
import Teleavatar from "./comp/tele-avatar";
import media from "./comp/media";
import news from "./comp/news";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/Contacts" component={Contact} />
        <Route path="/Careers" component={Career} />
        <Route path="/Bank" component={Banking} />
        <Route path="/tele-avatar" component={Teleavatar} />
        <Route path="/media" component={media} />
        <Route path="/news" component={news} />
      </Router>
    </div>
  );
}

export default App;
