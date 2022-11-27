import React from "react";

import { TotalDiv, Value } from "./styles";

export const CartTotal = ({ currentSale, setCurrentSale, emptyCard }) => {
  return (
    <>
      <TotalDiv>
        <Value>
          <p>Total</p>
          <span>
            {currentSale
              .reduce((first, current) => {
                return first + current.price;
              }, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </Value>
        <button
          className="button gray xl"
          onClick={() => {
            setCurrentSale([]);
            emptyCard(true);
          }}
        >
          Remover todos
        </button>
      </TotalDiv>
    </>
  );
};
