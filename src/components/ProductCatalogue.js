import React from "react";
import styled from "styled-components";
import { Product } from "./Product";

const MainContainer = styled.main`
  opacity: ${props => (props.showModel ? ".5" : "1")};
`;

const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProdctListCatalogTitle = styled.h2`
  margin: 0 0 0 94px;
`;

export const ProductCatalogue = ({ store, onClickHandler, showModel }) => {
  // adding into card can be dispatch from here
  return (
    <MainContainer showModel={showModel}>
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
              showModel={showModel}
            />
          );
        })}
      </ProductList>
    </MainContainer>
  );
};
