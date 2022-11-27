import { LiContainer, Image, Info } from "./styles";

export const ProductsCart = ({ image, title, type, handleRemove, id }) => {
  return (
    <LiContainer>
      <Image src={image} alt="" />
      <Info>
        <p>{title}</p>
        <span>{type}</span>
      </Info>
      <button onClick={() => handleRemove(id)}>Remover</button>
    </LiContainer>
  );
};
