import React from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { prodcuts } from "./products";

const MainContainer = styled.main``;

const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProdctListCatalogTitle = styled.h2`
  margin-left: 95px;
`;

export const ProductCatalogue = () => {
  const products = new Array(6).fill(prodcuts);
  return (
    <MainContainer>
      <ProdctListCatalogTitle>
        Lorem ipsum dolor sit amet
      </ProdctListCatalogTitle>
      <ProductList>
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              title={product.title}
              image={product.ProductCardImg}
              price={product.price}
              shortDescription={product.shortDescription}
            />
          );
        })}
      </ProductList>
    </MainContainer>
  );
};
