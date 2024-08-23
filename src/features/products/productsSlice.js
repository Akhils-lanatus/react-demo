import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  products: [],
  selectedProduct: [],
};
export const fetchAllProductsAsync = createAsyncThunk(
  "products/fetchData",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
  }
);
export const fetchSingleDataAsync = createAsyncThunk(
  "products/fetchSingleData",
  async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
  }
);
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeSingleProduct: (state) => {
      state.selectedProduct = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProductsAsync.pending, (state, action) => {
      state.isLoading = true;
      // console.log({ state, action });
    });
    builder.addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      // console.log({ state, action });
    });
    builder.addCase(fetchAllProductsAsync.rejected, (state, action) => {
      state.isLoading = false;
      // console.log(action.error);
    });
    builder.addCase(fetchSingleDataAsync.pending, (state, action) => {
      state.isLoading = true;
      // console.log({ state, action });
    });
    builder.addCase(fetchSingleDataAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedProduct = action.payload;
      // console.log({ state, action });
    });
    builder.addCase(fetchSingleDataAsync.rejected, (state, action) => {
      state.isLoading = false;
      // console.log({ state, action });
    });
  },
});
export const { removeSingleProduct } = productSlice.actions;
const getAllProducts = (state) => state.products.products;
const getSelectedProduct = (state) => state.products.selectedProduct;
// const getIsLoading = (state) => state.products.isLoading;
export { getAllProducts, getSelectedProduct };
// export { getAllProducts, getIsLoading };
export default productSlice.reducer;
