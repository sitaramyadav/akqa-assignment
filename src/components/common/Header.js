import React from "react";
import styled from "styled-components";

import akqaLog from "../../../images/akqa-logo.jpg";
import cartLogo from "../../../images/cart-icon.svg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 10px 50px;
`;

const CartIconContainer = styled.picture`
  position: relative;
  top: 20px;
`;

const IconCartButton = styled.img`
  width: 100%;
`;

const CountItermInTheCart = styled.figcaption`
  position: relative;
  width: 5px;
  height: 5px;
  bottom: 60px;
  right: 15px;
  border: 10px 10px;
  background: red;
  border-radius: 50px 50px;
  padding: 10px 10px 10px 10px;
  background-color: red;
`;

const CartIcon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Counter = styled.p`
  position: relative;
  bottom: 22px;
  right: 2px;
  color: white;
`;

export const Header = ({ quantity, onClickHandler, showModel }) => {
  return (
    <HeaderContainer>
      <picture>
        <IconCartButton src={akqaLog} alt={"akqa logo"} />
      </picture>
      <CartIconContainer>
        <CartIcon
          onClick={() => onClickHandler(!showModel)}
          src={cartLogo}
          alt={"cart logo"}
        />
        <CountItermInTheCart>
          <Counter>{quantity}</Counter>
        </CountItermInTheCart>
      </CartIconContainer>
    </HeaderContainer>
  );
};
