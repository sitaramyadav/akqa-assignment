import React, { useReducer, useState } from "react";
import { Header } from "./common/Header";
import { ProductCatalogue } from "./ProductCatalogue";
import { initialState, reducer } from "./CartReducer";
import { CartModal } from "./CartModal";
import { COMPUTE_CART_TOTAL } from "../Constants";
import { OpenCart } from "./OpenCart";

export const MainContainer = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const [showModel, setshowModel] = useState(false);
  const toggleModal = () => {
    setshowModel(!showModel);
  };
  return (
    <>
      <Header
        quantity={store.cart.length}
        onClickHandler={setshowModel}
        showModel={showModel}
      />
      <ProductCatalogue
        store={store}
        onClickHandler={dispatch}
        showModel={showModel}
      />
      <OpenCart toggleModal={toggleModal} />
      {showModel && <CartModal cart={store.cart} setshowModel={setshowModel} />}
    </>
  );
};
