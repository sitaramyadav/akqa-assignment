import { productInfo } from "./products";
import { ADD_TO_CART, UPDATE_CART, REMOVE_ITEM } from "../Constants";

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
          vat: _vat_,
          subTotal: _subTotal_,
          totialCostIncludingVat: 0
        }
      };
    case REMOVE_ITEM:
      const length = state.cart.products.length;
      const products_ = length === 1 ? [] : [...state.cart];
      const indexToBeRemoved =
        length > 1 && products_.findIndex(action.payload);
      products_.splice(indexToBeRemoved, indexToBeRemoved + 1);
      cartProductComputation(products_);
      const {
        vat_,
        subTotal_,
        totialCostIncludingVat_
      } = cartProductComputation(products_);

      return {
        ...state,
        cart: {
          ...state.cart,
          products: products_,
          vat: vat_,
          subTotal: subTotal_,
          totialCostIncludingVat: totialCostIncludingVat_
        }
      };
    default:
      throw new Error();
  }
}

function cartProductComputation(products) {
  if (products.length === 0) {
    return {
      subTotal: 0,
      vat: 0,
      totialCostIncludingVat: 0
    };
  }
  const subTotal = computeSubTotal(products);
  const vat = (subTotal * (20 / 100)).toFixed(2);
  const totialCostIncludingVat = (subTotal + vat).toFixed(2);
  return { subTotal, vat, totialCostIncludingVat };
}
function updateCartProduct(state, payload) {
  return state.cart.products.map(product => {
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
    return Number(acc) + Number(currProduct.totalCost).toFixed(2);
  }, 0);
}
