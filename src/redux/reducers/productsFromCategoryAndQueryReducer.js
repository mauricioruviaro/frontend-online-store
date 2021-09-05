import {
  REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY,
  REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY_SUCCESS,
  REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY_ERROR
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  error: false,
  products: []
}

function productsFromCategoryAndQueryReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY:
      return {
        ...state,
        loading: true
      }
    case REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...action.payload.results]
      }
    case REQUEST_PRODUCTS_FROM_CATEGORY_AND_QUERY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default productsFromCategoryAndQueryReducer;
