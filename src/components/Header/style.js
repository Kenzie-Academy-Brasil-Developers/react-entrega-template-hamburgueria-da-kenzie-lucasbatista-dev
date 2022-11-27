import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  width: 100%;
  min-height: 80px;
  margin-bottom: 16px;
  background-color: var(--gray-0);
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  height: 100%;
  width: 90%;
  max-width: 1400px;
  @media (max-width: 700px) {
    justify-content: center;
  }
  form {
    width: 100%;
    max-width: 370px;
    justify-content: space-around;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0px 10px 0px 20px;
    background-color: white;
    border: 2px solid var(--gray-20);
    border-radius: 8px;
    height: 60px;
    width: 100%;
  }
  form:focus-within {
    border: 2px solid var(--gray-100);
  }
  form input {
    font-size: 16px;
    color: var(--gray-50);
    padding-right: 10px;
    max-width: 210px;
  }
`;
