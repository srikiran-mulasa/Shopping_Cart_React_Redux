import React from 'react';
import SignUp from '../../all-components/signup/SignUp';

// Function component / dumb component
function Header(props) {
    // JSX
    return (
        <div className="head_container">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">{props.msg}</a>
                    <ul className="right hide-on-med-and-down">
                        <li>{props.children}</li>
                        <li>
                        <SignUp />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;