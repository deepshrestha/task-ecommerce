import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ProductList from "./containers/ListProductContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home">
          <Redirect to="/product/list" />
        </Route>
        <Route path="/product/:slug">
          <Home>
            <Navbar />
            <Menu />
            <div className="content-wrapper py-2">
              <Route exact path="/product/list" component={ProductList} />
            </div>
            <Footer />
          </Home>
        </Route>
        <Route path="*" render={() => <div>Page not found!</div>} />
      </Switch>
    </Router>
  );
};

export default App;
