import React from "react";
import "./cart-dropdown.styles.scss";

import CustomBotton from '../custom-button/custom-button.component';

const CartDropdown = () => (
    <div className="cart-dropdown">
    <div className="cart-item"></div>
    <CustomBotton >CHECKOUT</CustomBotton>
    </div>
);

export default CartDropdown ;