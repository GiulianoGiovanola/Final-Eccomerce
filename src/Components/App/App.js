import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "../../pages/Home";
import Category from "../../pages/Category";
import Product from "../../pages/Product";
import Checkout from "../../pages/Checkout";
import { CartProvider } from "../../Contexts/CartContext";
import About from "../About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Switch>
            <Route exact path={`/shop`}>
              <Category />
            </Route>
            <Route exact path={`/category/:catId`}>
              <Category />
            </Route>
            <Route exact path={`/product/:prodId`}>
              <Product />
            </Route>
            <Route exact path={`/checkout`}>
              <Checkout />
            </Route>
            <Route exact path={`/`}>
              <Home />
            </Route>
            <Route exact path={`/about`}>
              <About />
            </Route>
            <Route path="*">NOT FOUND</Route>
          </Switch>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
