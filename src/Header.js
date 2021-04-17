import React from "react";

function Header() {
    return (
        <React.Fragment>
            <ul>
                <li><a href={'/'}>Home</a></li>
                <li><a href={'/product'}>Product</a></li>
            </ul>
        </React.Fragment>
    );
}

export default Header;
