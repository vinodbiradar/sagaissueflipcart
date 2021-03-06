import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../Actions/constantType";

const initialState = {
  loading: false,
  loaded: false,
  products: [],
  error: null,
};

//defining the reducers function
const productReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        products: [],
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        products: action.payload,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        products: [],
      };

    default:
      break;
  }
};

export default productReducer;
