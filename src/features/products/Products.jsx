import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProductsAsync,
  fetchSingleDataAsync,
  getAllProducts,
} from "./productsSlice";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../pages/spinner";
const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, []);

  const products = useSelector(getAllProducts);
  const isLoading = useSelector((state) => state.products.isLoading);
  console.log(isLoading);
  console.log(products);

  if (isLoading) return <Spinner />;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      {products?.products?.map((item) => (
        <div
          key={item.id}
          className="product-item"
          onClick={async () => {
            await dispatch(fetchSingleDataAsync(item.id));
            navigate(`/products/${item.id}`);
          }}
        >
          <img src={item.thumbnail} alt={item.title} height={200} width={200} />
        </div>
      ))}
    </div>
  );
};

export default Products;
