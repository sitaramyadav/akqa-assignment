import React, { useReducer, useState } from "react";
import { Header } from "./common/Header";
import { ProductCatalogue } from "./product/ProductCatalogue";
import { initialState, reducer } from "./cart/CartReducer";
import { CartModal } from "./cart/CartModal";
import Cart from "./cart";

export const MainContainer = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const [showModel, setshowModel] = useState(false);
  const toggleModal = () => {
    setshowModel(!showModel);
  };

  return (
    <>
      <Header
        quantity={store.cart.products.length}
        onClickHandler={setshowModel}
        showModel={showModel}
      />
      <ProductCatalogue
        store={store}
        onClickHandler={dispatch}
        showModel={showModel}
      />
      {showModel && (
        <CartModal
          cart={store.cart}
          setshowModel={setshowModel}
          quantityChangeHandler={dispatch}
        />
      )}
      <Cart
        toggleModal={toggleModal}
        quantity={store.cart.products.length <= 0}
      />
    </>
  );
};
