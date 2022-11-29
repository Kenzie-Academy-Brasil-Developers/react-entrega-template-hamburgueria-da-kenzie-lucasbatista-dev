import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Products } from "../Products";
import { UlList } from "./styles";

export const ProductsList = ({
  dataBase,
  product,
  setEmptyCard,
  currentSale,
  setCurrentSale,

  isToast,
}) => {
  console.log(isToast);

  const handleClickTest = (id) => {
    const productSale = product.find((item) => {
      return item.id == id;
    });
    if (!currentSale.includes(productSale)) {
      setCurrentSale([...currentSale, productSale]);
    } else {
      toast.error("Esse item já esta no carrinho");
    }
    setEmptyCard(false);
  };

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
            handleClick={handleClickTest}
          />
        ))}
      </UlList>
    </>
  );
};
