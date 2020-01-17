import React from "react";
import styled from "styled-components";
import ProductUrl from "../../images/product-image.png";

const MainContainer = styled.main``;

const Product = styled.ul``;

export const Main = () => {
  const products = ["one ", "second", "thired"];
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
