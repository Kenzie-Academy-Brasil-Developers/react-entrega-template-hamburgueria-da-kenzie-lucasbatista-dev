import React from "react";
import { LiCard, ImageDiv, Info } from "./styles";

export const Products = ({ title, type, price, image, handleClick, id }) => {
  return (
    <>
      <LiCard>
        <ImageDiv>
          <img src={image} alt="" />
        </ImageDiv>
        <Info>
          <h3>{title}</h3>
          <p>{type}</p>
          <span>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button
            id={id}
            className="button green md"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Adicionar
          </button>
        </Info>
      </LiCard>
    </>
  );
};
