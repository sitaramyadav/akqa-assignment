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

export const ProductCatalogue = ({ store, onClickHandler }) => {
  // adding into card can be dispatch from here
  return (
    <MainContainer>
      <ProdctListCatalogTitle>
        Lorem ipsum dolor sit amet
      </ProdctListCatalogTitle>
      <ProductList>
        {store.products.map((product, index) => {
          return (
            <Product
              key={index}
              title={product.title}
              productImage={product.productCardImg}
              price={product.price}
              shortDescription={product.shortDescription}
              onClickHandler={onClickHandler}
            />
          );
        })}
      </ProductList>
    </MainContainer>
  );
};
