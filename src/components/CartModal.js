import React, { useState } from "react";
import styled from "styled-components";
import CartThumImageUrl from "../../images/cart-thumb.jpg";
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

const ProductInTheCart = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

export const CartModal = ({ cart, setshowModel }) => {
  // const [subTotal, setSubTotal] = useState(0);
  // const [total, setTotal] = useState(0);
  const subTotal = cart.reduce(function(accumulator, currentValue) {
    return Number(accumulator) + Number(currentValue.price);
  }, 0);

  const subTotalIncludingVat = subTotal * (20 / 100);
  const total = subTotalIncludingVat + subTotal;

  const handleBuyNow = () => {
    setshowModel(false);
    alert(
      `{ Subtotal: ${subTotal}, Vat: ${subTotalIncludingVat}, total: ${total}}`
    );
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
                console.log(product, "product from cartModal");
                return (
                  <tr key={index}>
                    <TableData>
                      <ProductInTheCart>
                        <picture>
                          <img
                            src={CartThumImageUrl}
                            alt="product image in the cart"
                          />
                        </picture>
                        <ProductTitle>{product.productTitle}</ProductTitle>
                      </ProductInTheCart>
                    </TableData>
                    <TableData>{product.price}</TableData>
                  </tr>
                );
              })}
              <tr>
                <SubTotal>
                  <p>Subtotal {subTotal}</p>
                  <p>Vat @ 20% {subTotalIncludingVat}</p>
                </SubTotal>
              </tr>
              <tr>
                <Total>Total Cost $ {total}</Total>
              </tr>
            </tbody>
          </TableStyling>
        </CartItems>
        <ButtonBuyNow onClick={() => handleBuyNow()}>Buy Now >></ButtonBuyNow>
      </CartModelContainer>
    </>
  );
};
