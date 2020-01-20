import React from "react";
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

const SubTotal = styled(TableData)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Total = styled(SubTotal)`
  display: flex;
  flex-direction: flex-end;
  justify-content: flex-end;
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

export const CartModal = ({ cart }) => {
  console.log("cartModal, ", cart);
  return (
    <>
      <CartModelContainer>
        <CartTitle>Your cart Items</CartTitle>

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
                  <p>Subtotal</p>
                  <p>Vat @ 20%</p>
                </SubTotal>
              </tr>
              <tr>
                <Total>Total Cost $</Total>
              </tr>
            </tbody>
          </TableStyling>
        </CartItems>
        <ButtonBuyNow>Buy Now >></ButtonBuyNow>
      </CartModelContainer>
    </>
  );
};
