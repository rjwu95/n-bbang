import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* <Route path="/users">
          <Users />
        </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
