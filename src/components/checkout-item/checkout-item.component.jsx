import React from "react";
import { connect } from "react-redux";

import {
    clearItemFromCart,
    addItem,
    removeItem,
} from "../../redux/cart/cart.actions";

import {
    CheckoutItemContainer,
    ImageContainer,
    Img,
    Name,
    Quantity,
    Price,
    Arrow,
    Value,
    RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Img src={imageUrl} alt="item"></Img>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
