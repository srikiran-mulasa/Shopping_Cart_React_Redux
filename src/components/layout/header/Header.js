import React from 'react';

// Function component / dumb component
function Header(props) {
    // JSX
    return (
        <div className="head_container">
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">{props.msg}</a>
                    <ul class="right hide-on-med-and-down">
                        {props.children}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;