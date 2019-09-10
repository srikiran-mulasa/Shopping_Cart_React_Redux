import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Cart from './components/all-components/cart/Cart';

class App extends Component {
  render() {
    const { displayType } = this.state;
    return (
      <div className="App">
        <Header msg="My Shop" className="head_container">
          {/* <h5>Amazing Tech gadgeds here !! </h5> */}
          <Cart/>
        </Header>
        <Footer />
      </div>
    );
  }
}

export default App;
