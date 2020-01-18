import React from "react";
import styled from "styled-components";

import akqaLog from "../../../images/akqa-logo.jpg";
import cartLogo from "../../../images/cart-icon.svg";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  // background-color: #f8f4f4;
  border-bottom: 1px solid black;
  margin: 10px 20px;
`;

const CardIcon = styled.picture`
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
`;

const Counter = styled.p`
  position: relative;
  bottom: 22px;
  right: 2px;
  color: white;
`;

export const MainHeader = () => {
  return (
    <Header>
      <picture>
        <IconCartButton src={akqaLog} alt={"akqa logo"} />
      </picture>
      <CardIcon>
        <img src={cartLogo} alt={"cart logo"} />
        <CountItermInTheCart>
          <Counter>4</Counter>
        </CountItermInTheCart>
      </CardIcon>
    </Header>
  );
};
