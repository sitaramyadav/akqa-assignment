import React, { Component } from "react";
import styled from "styled-components";

import akqaLog from "../../../images/akqa-logo.jpg";
import cartLogo from "../../../images/cart-icon.svg";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #f8f4f4;
`;

export const MainHeader = () => {
  return (
    <Header>
      <picture>
        <img src={akqaLog} alt={"akqa logo"} />
      </picture>
      <picture>
        <img src={cartLogo} alt={"cart logo"} />
      </picture>
    </Header>
  );
};
