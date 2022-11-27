import styled from "styled-components";

export const Container = styled.section`
  width: 370px;
  min-width: 300px;
  min-height: 225px;
  height: fit-content;
  border-radius: 5px;
`;

export const Header = styled.header`
  width: 100%;
  height: 65px;
  padding: 20px;
  background-color: var(--color-primary);
  border-radius: 5px 5px 0 0;
  h2 {
    font-size: 20px;
    font-weight: 700;
    color: var(--gray-0);
  }
`;

export const Products = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 320px;
  gap: 20px;
  overflow-y: auto;
  background-color: var(--gray-0);
  padding: 20px 10px;
`;

export const CartEmpty = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 170px;
  background-color: var(--gray-0);
  border-radius: 0px 0px 5px 5px;
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: var(--gray-100);
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-50);
  }
`;
