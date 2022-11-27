import React from "react";
import { Products } from "../Products";
import { UlList } from "./styles";

export const ProductsList = ({ dataBase, handleClick }) => {
  return (
    <>
      <UlList>
        {dataBase.map((item) => (
          <Products
            key={item.id}
            title={item.name}
            type={item.category}
            price={item.price}
            image={item.img}
            id={item.id}
            handleClick={handleClick}
          />
        ))}
      </UlList>
    </>
  );
};
