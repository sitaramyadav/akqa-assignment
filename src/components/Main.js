import React from "react";
import styled from "styled-components";
import ProductUrl from "../../images/cart-thumb.jpg";

const MainContainer = styled.main``;

const Product = styled.ul``;

export const Main = () => {
  const products = ["one ", "2", "3", "j4", "h5", "6", "j7", "8o", "9"];
  return (
    <MainContainer>
      {products.map((product, index) => {
        return (
          <Product key={index * Math.random()}>
            <picture>
              <img src={ProductUrl} />
              <figcaption>{product}</figcaption>
            </picture>
          </Product>
        );
      })}
    </MainContainer>
  );
};
