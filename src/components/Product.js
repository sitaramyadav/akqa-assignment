import React from "react";
import styled from "styled-components";
import IconButtonCart from "../../images/cart-btn.svg";
import ProductCardImg from "../../images/cart-thumb.jpg";

const CardContainer = styled.li`
  list-style-type: none;
  width: 430px;
`;

const CartFooter = styled.figcaption`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const ButtonAddToCart = styled.button`
  background-color: red;
  display: flex;
  color: white;
  padding: 0px 05px;
  justify-content: space-between;
  cursor: pointer;
`;

const IconAddToCart = styled.img`
  margin: 10px;
`;

const CartThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductTitle = styled.h3`
  margin: 40px 0 0 0;
`;

export const Product = ({ title, productImage, price, shortDescription }) => {
  return (
    <CardContainer>
      <ProductTitle>{title}</ProductTitle>
      <picture>
        <CartThumb>
          <img src={productImage} alt={"Card Image"} />
        </CartThumb>
        <figcaption>{shortDescription}</figcaption>
        <CartFooter>
          <p>Price: {price}</p>
          <ButtonAddToCart>
            <IconAddToCart src={IconButtonCart} alt={"Card btn"} />
            <p>ADD TO CART</p>
          </ButtonAddToCart>
        </CartFooter>
      </picture>
    </CardContainer>
  );
};
