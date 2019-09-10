import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Products from './components/all-components/product/Products';
import Cart from './components/all-components/cart/Cart';
import CartDetails from './components/all-components/cart-details/CartDetails';

class App extends Component {
  state = {
    displayType: 'allProducts',
  };

  render() {
    const { displayType } = this.state;
    return (
      <div className="App">
        <Header msg="Shop here!!" className="head_container">
          {/* <h5>Amazing Tech gadgeds here !! </h5> */}
          <Cart
            displayType={displayType}
          />
        </Header>

        <Router>
        <nav>
          <Link to="/">Products </Link>
          <Link to="/about">Cart </Link>
        </nav>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={CartDetails} />
          </Switch>
        </Router>

          {/* <Products
            allProducts={productList}
            addToCart={this.addItemToCart}
          />

          <CartDetails cartItems={allCartItems} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
