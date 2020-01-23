import React from "react";
import styled, { css } from "styled-components";
import CartThumImageUrl from "../../images/cart-thumb.jpg";
import DeleteIcon from "../../images/icn-bin.png";
import { UPDATE_CART, REMOVE_ITEM } from "../Constants";
const CartModelContainer = styled.article`
  position: absolute;
  top: 20%;
  background-color: white;
  display: flex;
  left: 29%;
  box-shadow: 10px 10px 5px #e1d9d9;
  padding: 20px;
  width: 800px;
  box-sizing: border-box;
`;
const commonStyleForTable = css`
  border-bottom: 2px solid black;
  border-collapse: collapse;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px;
`;
const TableStyling = styled.table`
  ${commonStyleForTable}
  border-top: 2px solid black;
  border-bottom: none;

  width: 700px;
  margin: 60px 0 30px 0;
  box-sizing: border-box;
`;

const CartItems = styled.section`
  box-sizing: border-box;
`;
const TableHeading = styled.tr`
  ${commonStyleForTable}
`;
const TableData = styled.td`
  box-sizing: border-box;
  // padding: 10px 0 5px 0;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
`;

const SubTotal = styled.td`
  ${commonStyleForTable}

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 700px;
`;

const TableRow = styled.tr`
  width: 100%;
  position: relative;
  border-bottom: 2px solid black;
`;

const Total = styled.td`
  display: flex;
  flex-direction: flex-end;
  justify-content: flex-end;
  width: 700px;
  padding: 10px 0 10px;
`;
const CartTitle = styled.h3`
  position: absolute;
  top: 10px;
`;

const ProductTitle = styled.p``;

const ProductInfo = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TotalCostContainer = styled.section`
  display: flex;
  width: 90px;
`;

const ButtonBuyNow = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  background-color: red;
  font-size: 16px;
  cursor: pointer;
  ${props =>
    props.disabled === true &&
    css`
      cursor: no-drop;
      opacity: 0.5;
    `}
`;

const CloseModal = styled.button`
  background: white;
  height: 50px;
  width: 50px;
  font-size: 24px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 0;
`;

const TrashIcon = styled.img`
  position: relative;
  left: 0px;
  top: 10px;
  cursor: pointer;
`;

const TotalCost = styled.p`
  position: relative;
  left: 20px;
`;

const ProductDetail = styled.section``;

const Price = styled.p``;

export const CartModal = ({ cart, setshowModel, quantityChangeHandler }) => {
  const handleBuyNow = (subTotal, total, vat) => {
    setshowModel(false);
    alert(`{ subtotal: ${subTotal}, total: ${total} vat: ${(vat * 20) / 100}}`);
  };

  return (
    <>
      <CartModelContainer>
        <CartTitle>Your cart Items</CartTitle>
        <CloseModal onClick={() => setshowModel(false)}>X</CloseModal>

        <CartItems>
          <TableStyling>
            <tbody>
              <TableHeading>
                <th>Product</th>
                <th>Total Cost</th>
              </TableHeading>
              {cart.products &&
                cart.products.map(function productsIntoCart(product, index) {
                  return (
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
                                    totalCost: product.totalCost,
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
                })}
              <tr>
                <SubTotal>
                  <p>Subtotal $ {cart.subTotal}</p>
                  <p>Vat @ 20% {cart.vat}</p>
                </SubTotal>
              </tr>
              <TableRow>
                <Total>Total Cost $ {cart.totialCostIncludingVat}</Total>
              </TableRow>
            </tbody>
          </TableStyling>
        </CartItems>
        <ButtonBuyNow
          onClick={() =>
            handleBuyNow(cart.subTotal, cart.totialCostIncludingVat, cart.vat)
          }
          disabled={cart.products.length <= 0}
        >
          Buy Now >>
        </ButtonBuyNow>
      </CartModelContainer>
    </>
  );
};
