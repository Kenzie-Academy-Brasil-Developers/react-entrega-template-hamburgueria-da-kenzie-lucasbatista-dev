import GlobalStyle from "./globalStyles";
import { api } from "./components/services/api";
import { useState, useEffect } from "react";
import { Nav } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [product, setProduct] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [emptyCard, setEmptyCard] = useState(true);
  const [isToast, setIsToast] = useState(false);

  const showProducts = (value) => {
    const newProducts = product.filter((item) => {
      if (
        item.name.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
      ) {
        return item;
      }
    });
    setFiltredProducts(newProducts);
  };
  useEffect(() => {
    api.get("/products").then((res) => {
      setFiltredProducts(res.data);
      setProduct(res.data);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <ToastContainer />

      <Nav showProducts={showProducts} />
      <main>
        <ProductsList
          emptyCard={setEmptyCard}
          dataBase={filtredProducts}
          setEmptyCard={setEmptyCard}
          product={product}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          setIsToast={setIsToast}
        />
        <Cart
          dataBase={currentSale}
          setCurrentSale={setCurrentSale}
          emptyCard={emptyCard}
          currentSale={currentSale}
          setEmptyCard={setEmptyCard}
        />
      </main>
    </>
  );
}

export default App;
