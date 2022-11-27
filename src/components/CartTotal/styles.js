import styled from "styled-components";

export const TotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  padding: 18px;
  gap: 20px;
  border-radius: 0 0 5px 5px;
  background-color: var(--gray-0);
  border-top: 2px solid var(--gray-20);
`;

export const Value = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-100);
  }
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 24px;
    color: var(--color-primary);
  }
`;
