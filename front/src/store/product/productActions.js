/** Actions types **/
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SAVE_PRODUCT = "SAVE_PRODUCT";

/** Actions creators **/
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const saveProduct = (products) => ({
  type: SAVE_PRODUCT,
  products,
});
