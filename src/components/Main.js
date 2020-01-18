// import React, { useState } from "react";
// import styled from "styled-components";
// import { Header } from "../components/common/Header";
// import { ProductCatalogue } from "./ProductCatalogue";
// import { productInfo } from "./products";

// export const Main = () => {
//   const initialProductState = new Array(6).fill(productInfo);
//   initialProductState.map(function(each, ind) {
//     return {
//       key: ind,
//       title: productInfo.title,
//       productImage: productInfo.productCardImg,
//       price: productInfo.price,
//       shortDescription: productInfo.shortDescription
//     };
//   });
//   const initialCart = {
//     productTitle: "Lorem ipsum dolor sit amet",
//     quantity: 7,
//     price: 397,
//     img: productInfo.productImage
//   };
//   const [products, setproducts] = useState(initialProductState);
//   const [cart, setCart] = useState(initialCart);

//   return (
//     <>
//       <Header noOfProductsInCart={cart.quantity} />
//       <ProductCatalogue products={products} />
//     </>
//   );
// };
