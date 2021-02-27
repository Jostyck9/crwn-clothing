import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51IPO2nJN1orZVJYRmOJVFvYQwH19zePaGdham2AwdtzmCAXfkdACa0vI5PlMytmCrvFys8VMTBBwRaPl5KnPijVn00mYYVT3Na";

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Hugo"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total i $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
