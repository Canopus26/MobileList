import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Admin from "./pages/Admin";
import List from "./pages/List";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Admin />
        </Route>
        <Route path="/List">
          <List />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
