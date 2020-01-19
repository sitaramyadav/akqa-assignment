import React from "react";
import styled from "styled-components";
import IconButtonCart from "../../images/cart-btn.svg";
import ProductCardImg from "../../images/cart-thumb.jpg";
import { ADD_TO_CART } from "../Constants";

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
  padding: 0px 10px 0 10px;
  justify-content: space-between;
  cursor: pointer;
  font-size: 16px;
`;

const IconAddToCart = styled.img`
  margin: 17px 10px 0 0;
`;

const CartThumb = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProductTitle = styled.h3`
  margin: 20px 0 2px 0px;
`;

const Price = styled.p`
  font-weight: bold;
`;
export const Product = ({
  title,
  productImage,
  price,
  shortDescription,
  onClickHandler
}) => {
  return (
    <CardContainer>
      <ProductTitle>{title}</ProductTitle>
      <picture>
        <CartThumb src={productImage} alt={"Card Image"} />
        <figcaption>{shortDescription}</figcaption>
        <CartFooter>
          <Price>Price: ${price}</Price>
          <ButtonAddToCart
            onClick={() =>
              onClickHandler({
                type: ADD_TO_CART,
                payload: {
                  price: price,
                  img: productImage,
                  productTitle: title
                }
              })
            }
          >
            <IconAddToCart src={IconButtonCart} alt={"Card btn"} />
            <p>ADD TO CART</p>
          </ButtonAddToCart>
        </CartFooter>
      </picture>
    </CardContainer>
  );
};
