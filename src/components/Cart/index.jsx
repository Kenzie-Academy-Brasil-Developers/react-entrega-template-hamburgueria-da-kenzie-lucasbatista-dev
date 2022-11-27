import React from "react";
import { CartTotal } from "../CartTotal";
import { ProductsCart } from "../ProductsCart";

import { Container, Header, Products, CartEmpty } from "./styles";

export const Cart = ({
  dataBase,
  handleRemove,
  emptyCard,
  setCurrentSale,
  currentSale,
}) => {
  return (
    <>
      <Container>
        <Header>
          <h2>Carrinho de compras</h2>
        </Header>
        {dataBase.length ? (
          <>
            <Products>
              {dataBase.map((item) => (
                <ProductsCart
                  image={item.img}
                  title={item.name}
                  type={item.category}
                  key={item.id}
                  handleRemove={handleRemove}
                  id={item.id}
                />
              ))}
            </Products>
            <CartTotal
              emptyCard={emptyCard}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          </>
        ) : (
          <CartEmpty>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </CartEmpty>
        )}
      </Container>
    </>
  );
};
