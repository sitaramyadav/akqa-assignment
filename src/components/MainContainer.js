import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { Header } from "./common/Header";
import { ProductCatalogue } from "./ProductCatalogue";
import { productInfo } from "./products";
import { ADD_TO_CART } from "../Constants";

export const MainContainer = () => {
  const initialProductState = new Array(6).fill(productInfo);
  initialProductState.map(function(each, ind) {
    return {
      key: ind,
      title: productInfo.title,
      productImage: productInfo.productCardImg,
      price: productInfo.price,
      shortDescription: productInfo.shortDescription
    };
  });
  const initialCart = {
    productTitle: "Lorem ipsum dolor sit amet",
    quantity: 7,
    price: 397,
    img: productInfo.productImage
  };

  function reducer(state, action) {
    console.log("reducer", state, action);
    console.log(state, "state", action, "action");
    switch (action.type) {
      case ADD_TO_CART:
        return { ...state, quantity: cart.quantity + 1 };
      default:
        throw new Error();
    }
  }

  const [products, setproducts] = useState(initialProductState);
  // const [cart, setCart] = useState(initialCart);

  const [cart, dispatch] = useReducer(reducer, initialCart);

  return (
    <>
      <Header cart={cart} onClickHandler={dispatch} />
      <ProductCatalogue
        products={products}
        onClickHandler={dispatch}
        cart={cart}
      />
    </>
  );
};
