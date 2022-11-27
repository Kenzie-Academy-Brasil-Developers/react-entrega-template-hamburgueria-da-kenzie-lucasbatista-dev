import styled from "styled-components";

export const UlList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 20px;
  max-width: 950px;
  @media (max-width: 700px) {
    flex-wrap: nowrap;
    max-width: 100%;
    height: 360px;
    overflow-x: auto;
  }
`;
