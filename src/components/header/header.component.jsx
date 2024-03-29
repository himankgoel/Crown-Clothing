import React from "react";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {ReactComponent as Logo } from "./../../assets/crown.svg"
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from "./header.styles";

 const Header = ({currentUser,hidden}) => {
     return <HeaderContainer>
         <LogoContainer to="/">
            <Logo className="logo"/>
         </LogoContainer>
         <OptionsContainer>
             <OptionLink to="/shop">SHOP</OptionLink>
             <OptionLink to="/shop">CONTACT</OptionLink>
             {
                 currentUser ? <OptionDiv onClick={() => auth.signOut()}>SIGNOUT</OptionDiv> : <OptionLink to="/signin">SIGNIN</OptionLink>
             }
             <CartIcon/>
         </OptionsContainer>
         {
             hidden ? null : <CartDropdown/>
         }
     </HeaderContainer>
 }
 const mapStateToProps = createStructuredSelector({
     currentUser : selectCurrentUser,
     hidden : selectCartHidden
 })
 export default connect(mapStateToProps)(Header);