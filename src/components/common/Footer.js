import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  border-top: 1px solid black;
  margin: 50px;
  text-align: right;
  position: relative;
  bottom: 10px;
`;

const FooterInfo = styled.p`
    position: relative:
    bottom: 0;
`;
export const Footer = () => (
  <FooterContainer>
    <FooterInfo>Copyright @ AKQA LTD Registered in England</FooterInfo>
  </FooterContainer>
);
