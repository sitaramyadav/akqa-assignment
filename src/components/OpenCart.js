import React from "react";
import styled from "styled-components";

const OpenCartButton = styled.button`
  background-color: red;
  display: -ms-flexbox;
  color: white;
  cursor: pointer;
  font-size: 24px;
  width: 160px;
  height: 54px;
  padding: 10px;
  text-align: center;
  position: relative;
  left: calc(100% - 210px);
  top: 27px;
`;

export const OpenCart = ({ toggleModal }) => {
  return (
    <OpenCartButton onClick={() => toggleModal()}>Open Cart</OpenCartButton>
  );
};
