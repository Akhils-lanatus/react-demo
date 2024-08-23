import { useDispatch, useSelector } from "react-redux";
import { getSelectedProduct, removeSingleProduct } from "./productsSlice";
import { Navigate } from "react-router-dom";
import "./Product.css";
import { useEffect } from "react";
const SelectedProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(removeSingleProduct());
    };
  }, []);
  const product = useSelector(getSelectedProduct);
  if (product.length === 0) return <Navigate to={"/"} />;
  return (
    <div className="product-item" style={{ marginTop: "10%" }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        height={200}
        width={200}
      />
    </div>
  );
};

export default SelectedProduct;
