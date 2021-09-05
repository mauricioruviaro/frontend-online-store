export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const REQUEST_CATEGORIES_SUCCESS = 'REQUEST_CATEGORIES_SUCCESS';
export const REQUEST_CATEGORIES_ERROR = 'REQUEST_CATEGORIES_ERROR';
export const REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY = 'REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY';
export const REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY_SUCCESS = 'REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY_SUCCESS';
export const REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY_ERROR = 'REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY_ERROR';

export const requestCategories = () => ({
  type: REQUEST_CATEGORIES
});

export const requestCategoriesSuccess = (payload) => ({
  type: REQUEST_CATEGORIES_SUCCESS,
  payload
});

export const requestCategoriesError = (payload) => ({
  type: REQUEST_CATEGORIES_ERROR,
  payload
});

export const requestProductsFromCategoryAndQuery = () => ({
  type: REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY
});

export const requestProductsFromCategoryAndQuerySuccess = (payload) => ({
  type: REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY_SUCCESS,
  payload
});

export const requestProductsFromCategoryAndQueryError = (payload) => ({
  type: REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY_ERROR,
  payload
});

export const fetchCategories = async () => (dispatch) => {
  dispatch(requestCategories());
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
  .then((response) => response.json())
  .then((data) => dispatch(requestCategoriesSuccess(data)))
  .catch((error) => dispatch(requestCategoriesError(error)));
}

export const fetchProductsFromCategoryAndQuery = async (categoryId, query) => (dispatch) => {
  dispatch(requestProductsFromCategoryAndQuery());
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
  .then((response) => response.json())
  .then((data) => dispatch(requestProductsFromCategoryAndQuerySuccess(data)))
  .catch((error) => requestProductsFromCategoryAndQueryError(error));
}
