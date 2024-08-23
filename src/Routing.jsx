import { Route, Routes } from "react-router-dom";
import { Counter } from "./features/counter/counter";
import Products from "./features/products/Products";
import SelectedProduct from "./features/products/SelectedProduct";
import Navbar from "./pages/Navbar";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 style={{ textAlign: "center" }}>Hello, Everyone</h1>
            </>
          }
        />
        <Route path="counter" element={<Counter />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SelectedProduct />} />
      </Routes>
    </>
  );
};

export default Routing;
