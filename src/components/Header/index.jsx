import { Header, Navbar } from "./style";
import logo from "../../assets/logoKenzie.svg";

export const Nav = ({ showProducts }) => {
  return (
    <>
      <Header>
        <Navbar>
          <img src={logo} alt="Logo" />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              showProducts(e.target.search.value.toLowerCase());
            }}
          >
            <input
              onKeyUp={(e) => {
                showProducts(e.target.value.toLowerCase());
              }}
              type="text"
              placeholder="Digitar pesquisa"
            />
            <button className="button green md">Pesquisar</button>
          </form>
        </Navbar>
      </Header>
    </>
  );
};
