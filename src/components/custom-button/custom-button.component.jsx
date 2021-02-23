import React from "react";
import {CustomStyledButtonContainer} from "./custom-button.styles";


const CustomButton = ({children, ...otherProps}) => (
    <CustomStyledButtonContainer {...otherProps}>
        {children}
    </CustomStyledButtonContainer>
) 
export default CustomButton;