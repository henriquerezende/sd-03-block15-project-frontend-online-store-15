import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import MainPage from './pages/MainPage';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <Link to="/" className="navbar-brand">Online Store</Link>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </nav>
      <Switch>
        <Route exact path="/CheckOut" component={Checkout} />
        <Route exact path="/shoppingCart" component={ShoppingCart} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
