import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
    CartIconContainer,
    ShoppingIcon,
    InputCount,
} from "./cart-icon.styles";

const CartIcon = ({ itemCount, toggleCartHidden }) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <InputCount>{itemCount}</InputCount>
        </CartIconContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
