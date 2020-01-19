import React from "react";
import styled from "styled-components";

const CartModelContainer = styled.article`
  background=color: green;
  z-index: 3;
  position: fixed;
  top: 50%;
  right: auto;
  left: auto;
`;

export const CartModel = ({ cart }) => {
  console.log("cartModel", cart);
  return (
    <article>
      {/* It needs to make a table, with proper cart data */}
      <h1>{cart.productTitle}</h1>
    </article>
  );
};
