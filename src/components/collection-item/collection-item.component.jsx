import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import {
    CollectionItemContainer,
    Image,
    CollectionFooter,
    Name,
    Price,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <Image
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />

            <CollectionFooter>
                <Name>{name}</Name>
                <Price>{price}$</Price>
            </CollectionFooter>
            <CustomButton onClick={() => addItem(item)} inverted>
                {" "}
                Add to cart{" "}
            </CustomButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

/* const mapStateToProps = (state) => ({}); */

export default connect(null, mapDispatchToProps)(CollectionItem);
