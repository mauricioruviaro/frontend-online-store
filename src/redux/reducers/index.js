import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import productsFromCategoryAndQueryReducer from './productsFromCategoryAndQueryReducer';

const rootReducer = combineReducers({
  categoryReducer,
  productsFromCategoryAndQueryReducer
});

export default rootReducer;
