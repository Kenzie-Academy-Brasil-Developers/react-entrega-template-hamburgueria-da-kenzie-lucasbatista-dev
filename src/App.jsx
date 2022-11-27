import GlobalStyle from "./globalStyles";
import { api } from "./components/services/api";
import { useState, useEffect } from "react";
import { Nav } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";

function App() {
  const [product, setProduct] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [emptyCard, setEmptyCard] = useState(true);
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

  const handleClick = (id) => {
    const productSale = product.find((item) => {
      return item.id == id;
    });
    if (!currentSale.includes(productSale)) {
      setCurrentSale([...currentSale, productSale]);
    } else {
      console.log("item duplicado");
    }
    setEmptyCard(false);
  };

  const handleRemove = (id) => {
    const removed = currentSale.filter((item) => {
      return item.id != id;
    });
    setCurrentSale(removed);
    if (currentSale.length <= 1) {
      setEmptyCard(true);
    }
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
      <Nav showProducts={showProducts} />
      <main>
        <ProductsList dataBase={filtredProducts} handleClick={handleClick} />
        <Cart
          dataBase={currentSale}
          handleRemove={handleRemove}
          setCurrentSale={setCurrentSale}
          emptyCard={emptyCard}
          currentSale={currentSale}
        />
      </main>
    </>
  );
}

export default App;
