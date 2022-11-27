import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    
    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-0: #F5F5F5;
   
    --negative: #E60000;
    --warning: #FFCD07;
    --success: #168821;
    --information: #155BCB;
  }
  *{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    list-style: none;

  }
  main {
    margin: 0 auto;
    max-width: 1400px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  @media (max-width: 700px) {
   main {
    flex-direction: column;
    align-items: center;
   } 
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
    border-radius: 8px;
    color: var(--gray-0);
    transition: 0.2s;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
 ;
  .button.green {
    background-color: var(--color-primary);
  }
  .button.green:hover{
    background-color: var(--color-primary-50);
  }
  .button.gray {
    background-color: var(--gray-20);
    color: var(--gray-50);
  }
  .button.gray:hover {
    background-color: var(--gray-50);
    color: var(--gray-20);
  }
  .button.xl {
    height: 3.75rem;
    width: 100%;
  }
  .button.md {
    height: 2.5rem;
  }
 
`;
export default GlobalStyle;
