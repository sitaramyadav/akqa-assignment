import React, { Component } from "react";
import styled from "styled-components";

import akqaLog from "../../../images/akqa-logo.jpg";
import cartLogo from "../../../images/basket.png";

const Header = styled.header`
  width: 200px;
  height: 100%;
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
