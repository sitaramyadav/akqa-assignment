import { productInfo } from "./products";
import { ADD_TO_CART, UPDATE_CART } from "../Constants";

const initialCart = {
  products: [
    {
      productTitle: "Lorem ipsum dolor sit",
      quantity: 1,
      price: 198.99,
      totalCost: 198.99
    }
  ],
  vat: 39.78,
  subTotal: 238.76,
  totialCostIncludingVat: 278.54
};

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

export const initialState = {
  cart: initialCart,
  products: initialProductState
};

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const newCart = action.payload;
      newCart.totalCost = action.payload.price;
      const products = [...state.cart.products, newCart];
      const subTotal = Number(computeSubTotal(products)).toFixed(2);
      const vat = (subTotal * (20 / 100)).toFixed(2);
      return {
        ...state,
        cart: {
          products,
          subTotal,
          vat,
          totialCostIncludingVat: Number(
            Number(subTotal) + Number(vat)
          ).toFixed(2)
        }
      };

    case UPDATE_CART:
      const updatedProducts = updateCartProduct(state, action.payload);
      const _subTotal_ = Number(computeSubTotal(updatedProducts)).toFixed(2);
      const _vat_ = (_subTotal_ * (20 / 100)).toFixed(2);
      return {
        ...state,
        cart: {
          products: updatedProducts,
          subTotal: _subTotal_,
          vat: _vat_,
          totialCostIncludingVat: Number(
            Number(_subTotal_) + Number(_vat_)
          ).toFixed(2)
        }
      };
    default:
      throw new Error();
  }
}

function updateCartProduct(state, payload) {
  return state.cart.products.map((product, index) => {
    if (product.productTitle === payload.productTitle) {
      return {
        quantity: payload.quantity,
        productTitle: payload.productTitle,
        price: payload.price,
        totalCost: (Number(payload.price) * Number(payload.quantity)).toFixed(2)
      };
    } else {
      return {
        quantity: product.quantity,
        productTitle: product.productTitle,
        price: product.price,
        totalCost: product.totalCost
      };
    }
  });
}

function computeSubTotal(products) {
  return products.reduce((acc, currProduct) => {
    return Number(acc) + Number(currProduct.totalCost);
  }, 0);
}
