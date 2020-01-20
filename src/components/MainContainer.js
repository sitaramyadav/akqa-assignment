import React, { useReducer, useState } from "react";
import { Header } from "./common/Header";
import { ProductCatalogue } from "./ProductCatalogue";
import { initialState, reducer } from "./CartReducer";
import { CartModal } from "./CartModal";

export const MainContainer = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const [showModel, setshowModel] = useState(false);
  console.log(showModel, "from main container");
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
      {showModel && <CartModal cart={store.cart} />}
    </>
  );
};
