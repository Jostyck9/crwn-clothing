import React from "react";

import { CartItemContainer, Img, ItemDetails } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <Img src={imageUrl} alt="item"></Img>
        <ItemDetails className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x ${price}
            </span>
        </ItemDetails>
    </CartItemContainer>
);

export default CartItem;
