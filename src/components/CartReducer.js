import { productInfo } from "./products";
import { ADD_TO_CART, GET_PRODUCT_INFO, GET_CART_QUANTITY } from "../Constants";

const initialCart = {
  productTitle: "Lorem ipsum dolor sit amet",
  quantity: 1,
  price: 397,
  img: productInfo.productImage
};

const initialProductState = new Array(6).fill(productInfo);

// initialProductState.map(function(each, ind) {
//   return {
//     key: ind,
//     title: productInfo.title,
//     productImage: productInfo.productCardImg,
//     price: productInfo.price,
//     shortDescription: productInfo.shortDescription
//   };
// });

export const initialState = {
  cart: { ...initialCart },
  products: initialProductState
};

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, quantity: action.payload.quantity };
    case GET_PRODUCT_INFO:
      return { ...state, products: state.products };
    case GET_CART_QUANTITY:
      return state.cart.quantity;
    default:
      throw new Error();
  }
}
