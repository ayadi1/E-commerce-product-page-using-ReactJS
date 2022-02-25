import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
import { useState } from "react";

function App() {
  const [productCount, setProductCount] = useState(0);
  const add = () => setProductCount((old) => ++old);
  const sub = () => setProductCount((old) => --old);

  return (
    <div className="App">
      <Header productCount={productCount} />
      <Main productCount={productCount} add={add} sub={sub} />
      <Footer />
    </div>
  );
}

export default App;
