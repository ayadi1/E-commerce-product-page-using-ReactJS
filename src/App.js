import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
import DisplayProduct from "./components/DisplayProduct";
import { useState } from "react";

function App() {
  const [productCount, setProductCount] = useState(0);
  let showDisplayProduct = true;
  const showProduct = () => {
    const DisplayProduct = document.getElementById("DisplayProduct");
    if (showDisplayProduct) {
      DisplayProduct.classList.add("showDisplayImage");
      showDisplayProduct = !showDisplayProduct;
    } else {
      DisplayProduct.classList.remove("showDisplayImage");
      showDisplayProduct = !showDisplayProduct;
    }
  };
  const add = () => setProductCount((old) => ++old);
  const sub = () => setProductCount((old) => --old);

  return (
    <div className="App">
      <Header productCount={productCount} />
      <Main
        productCount={productCount}
        add={add}
        sub={sub}
        showProduct={showProduct}
      />
      <Footer />
      <DisplayProduct showProduct={showProduct} />
    </div>
  );
}

export default App;
