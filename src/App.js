import Home from "./components/home/home";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart/cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="product/${product_id}" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
