import {
  REQUEST_CATEGORIES,
  REQUEST_CATEGORIES_SUCCESS,
  REQUEST_CATEGORIES_ERROR
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  error: false,
  categories: []
}

function categoryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CATEGORIES:
    return {
      ...state,
      loading: true,
    };
  case REQUEST_CATEGORIES_SUCCESS:
    return {
      ...state,
      categories: [...action.payload]
    }
  case REQUEST_CATEGORIES_ERROR:
    return {
      ...state,
      error: action.payload
    }
  default:
    return {
      ...state,
    };
  }
}

export default categoryReducer;
