import React from "react";
import CartThumImageUrl from "../../images/cart-thumb.jpg";
import DeleteIcon from "../../images/icn-bin.png";
import { UPDATE_CART, REMOVE_ITEM } from "../Constants";

import {
  TableRow,
  TableData,
  ProductInfo,
  ProductDetail,
  ProductTitle,
  Price,
  TotalCostContainer,
  TrashIcon,
  TotalCost
} from "./CartItemStyle";

export const CartItem = (product, index) => (
  <TableRow key={index}>
    <TableData>
      <ProductInfo>
        <picture>
          <img src={CartThumImageUrl} alt="Product Image" />
        </picture>
        <ProductDetail>
          <ProductTitle>{product.productTitle}</ProductTitle>
          <Price>$ {product.price}</Price>
          <select
            value={product.quantity}
            onChange={event => {
              quantityChangeHandler({
                type: UPDATE_CART,
                payload: {
                  quantity: event.target.value,
                  price: product.price,
                  totalCost:
                    parseInt(product.price) * parseInt(event.target.value),
                  productTitle: product.productTitle
                }
              });
            }}
          >
            <option value={1}>{1}</option>
            <option value={2}>{2}</option>
            <option value={3}>{3}</option>
            <option value={4}>{4}</option>
          </select>
        </ProductDetail>
      </ProductInfo>
      <TotalCostContainer>
        <picture>
          <TrashIcon
            src={DeleteIcon}
            alt="Delete from cart"
            onClick={() => {
              quantityChangeHandler({
                type: REMOVE_ITEM,
                payload: {
                  quantity: product.quantity,
                  price: product.price,
                  totalCost: product.totalCost,
                  productTitle: product.productTitle
                }
              });
            }}
          />
        </picture>
        <TotalCost>$ {product.totalCost}</TotalCost>
      </TotalCostContainer>
    </TableData>
  </TableRow>
);
