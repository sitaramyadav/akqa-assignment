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

export const CartModal = ({ cart }) => {
  console.log("cartModal, ", cart);
  return (
    <CartModelContainer>
      {cart.map(function productsIntoCart(product, index) {
        <article key={index}>
          {/* It needs to make a table, with proper cart data */}
          <h1>{product.productTitle}</h1>
        </article>;
      })}
    </CartModelContainer>
  );
};
