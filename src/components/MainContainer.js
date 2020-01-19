import React, { useReducer, useState } from "react";
import { Header } from "./common/Header";
import { ProductCatalogue } from "./ProductCatalogue";
import { initialState, reducer } from "./CartReducer";
import { CartModel } from "./CartModel";

export const MainContainer = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const [showModel, setshowModel] = useState(false);
  return (
    <>
      <Header
        quantity={store.cart.length}
        onClickHandler={setshowModel}
        showModel={showModel}
      />
      <ProductCatalogue store={store} onClickHandler={dispatch} />
      {showModel && <CartModel cart={store.cart} />}
    </>
  );
};
