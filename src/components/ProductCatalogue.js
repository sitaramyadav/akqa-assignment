import React from "react";
import styled from "styled-components";
import { Product } from "./Product";

const MainContainer = styled.main``;

const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProdctListCatalogTitle = styled.h2`
  margin-left: 95px;
`;

export const ProductCatalogue = ({ products, cart, onClickHandler }) => {
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
              productImage={product.productCardImg}
              price={product.price}
              shortDescription={product.shortDescription}
              cart={cart}
              onClickHandler={onClickHandler}
            />
          );
        })}
      </ProductList>
    </MainContainer>
  );
};
