import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
    const priceForStripe  = price*100;
    const publishableKey = "pk_test_51INVMLAsCib2e8ea8F0vhHaKE6nYiNXMVPTiNJx0n0Ahy0sxujVSiK89jUIetfcWMfWOzyVsu8YsgSrF21to3Br000T2toOCcz"

    const onToken = token => {
        console.log(token);
        alert("Payment Successful!")
    } 

    return( 
    <StripeCheckout
        label="Pay Now"
        name="DIADEM CLOTHING Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey = {publishableKey}
    />
    )
}
export default StripeCheckoutButton;