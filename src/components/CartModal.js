import React, { useState } from "react";
import styled from "styled-components";
import CartThumImageUrl from "../../images/cart-thumb.jpg";
import DeleteIcon from "../../images/icn-bin.png";
const CartModelContainer = styled.article`
  position: absolute;
  top: 20%;
  background-color: white;
  display: flex;
  left: 30%;
  box-shadow: 10px 10px 5px #e1d9d9;
  padding: 20px;
`;

const TableStyling = styled.table`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-collapse: collapse;
`;

const CartItems = styled.section`
  margin: 60px 0 30px 0;
`;
const TableHeading = styled.th`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-collapse: collapse;
  padding: 10px 0px 10px 0px;
  text-align: left;
`;
const TableData = styled.td`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-collapse: collapse;
  padding: 5px 0 5px 0;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubTotal = styled.td`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-collapse: collapse;
`;

const Total = styled.td`
  display: flex;
  flex-direction: flex-end;
  justify-content: flex-end;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-collapse: collapse;
`;

const CartTitle = styled.h3`
  position: absolute;
`;

const ProductTitle = styled.p``;

const ProductInfo = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TotalPrice = styled.section`
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
  padding: 5px 10px 05px 10px;
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

const ProductDetail = styled.section``;

const Price = styled.p``;

export const CartModal = ({ cart, setshowModel }) => {
  const [quantity, setQuantity] = useState(cart.length);
  const [totalCost, setTotalCost] = useState(0);
  const [totalCostIncludingVat, setSubTotalIncludingVat] = useState(0);

  // const subTotal = cart.reduce(function(accumulator, currentValue) {
  //   return Number(accumulator) + Number(currentValue.price);
  // }, 0);

  // const subTotalIncludingVat = subTotal * (20 / 100);
  // const total = subTotalIncludingVat + subTotal;

  const handleBuyNow = () => {
    setshowModel(false);
    alert(
      `{ Subtotal: ${totalCost}, Vat: ${(totalCost * 20) /
        100}, total: ${totalCostIncludingVat}}`
    );
  };

  const quantityChangeHandler = event => {
    setQuantity(event.target.value);
    // This needs to be change if there is multiple type of product
    setTotalCost((totalCost * quantity).toFixed(2));
    setSubTotalIncludingVat((totalCost * (20 / 100)).toFixed(2));
  };

  return (
    <>
      <CartModelContainer>
        <CartTitle>Your cart Items</CartTitle>
        <CloseModal onClick={() => setshowModel(false)}>X</CloseModal>

        <CartItems>
          <TableStyling>
            <tbody>
              <tr>
                <TableHeading>Product</TableHeading>
                <TableHeading>Total Cost</TableHeading>
              </tr>
              {cart.map(function productsIntoCart(product, index) {
                return (
                  <tr key={index}>
                    <TableData>
                      <ProductInfo>
                        <picture>
                          <img src={CartThumImageUrl} alt="Product Image" />
                        </picture>
                        <ProductDetail>
                          <ProductTitle>{product.productTitle}</ProductTitle>
                          <Price>{product.price}</Price>
                          <select
                            value={quantity}
                            onChange={quantityChangeHandler}
                          >
                            <option value={1}>{1}</option>
                            <option value={2}>{2}</option>

                            <option value={3}>{3}</option>

                            <option value={4}>{4}</option>
                          </select>
                        </ProductDetail>
                      </ProductInfo>
                      <TotalPrice>
                        <picture>
                          <img src={DeleteIcon} alt="Delete from cart" />
                        </picture>
                        <Price>{product.price * quantity}</Price>
                      </TotalPrice>
                    </TableData>
                  </tr>
                );
              })}
              <tr>
                <SubTotal>
                  <p>Subtotal {totalCost}</p>
                  <p>Vat @ 20% {totalCostIncludingVat}</p>
                </SubTotal>
              </tr>
              <tr>
                <Total>Total Cost $ {totalCostIncludingVat}</Total>
              </tr>
            </tbody>
          </TableStyling>
        </CartItems>
        <ButtonBuyNow onClick={() => handleBuyNow()}>Buy Now >></ButtonBuyNow>
      </CartModelContainer>
    </>
  );
};
