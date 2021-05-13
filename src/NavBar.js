import react from 'react';
import { Nav, NavDropdown, Navbar, Button, Form, FormControl } from 'react-bootstrap';
const NavBar = () => {

    return (
        <div className="Header">

            <div className="Header-optionAddress">
                location item
                <div className="Header-option">
                    <span className="Header-optionLineOne">Hello</span>
                    <span className="Header-optionLineTwo">Select your address</span>
                </div>
            </div>
            <div className="Header-navItems">
                <a to='/cart'>
                    <div className="Header-optionCart">
                        ShoppingBasketIcon
                        <span className="Header-cartCount">get count</span>
                    </div>
                </a>
            </div>
            <Button className="LiquidButton"/>

        </div>
    );
}

export default NavBar;