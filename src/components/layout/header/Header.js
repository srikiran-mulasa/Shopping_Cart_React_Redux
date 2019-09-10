import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from '../../all-components/product/Products';
import CartDetails from '../../all-components/cart-details/CartDetails';


// import SignUp from '../../all-components/signup/SignUp';

// Function component / dumb component
function Header(props) {
    return (
        <div className="head_container">
            <Router>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">{props.msg}</a>


                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/"><h5>Products</h5> </Link></li>
                            <li><Link to="/cart"><h5>Cart</h5> </Link></li>
                            <li>{props.children}</li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={Products} />
                    <Route exact path="/cart" component={CartDetails} />
                </Switch>
            </Router>
        </div>
    )
}

export default Header;