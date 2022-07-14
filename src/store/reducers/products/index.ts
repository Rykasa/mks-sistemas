import { ProductType } from "../../actions";
import * as types from '../../types'

export interface ProductsState {
  products: {
    products: ProductType[]
  },
  isLoading: boolean,
  isCartOpen: boolean,
  error: string,
}

const initialState: ProductsState = {
  products: { 
    products: [{
      id: 0,
      name: '',
      brand: '',
      description: '',
      price: 0
    }]
  },
  isLoading: false,
  isCartOpen: false,
  error: '',
}

export const productsReducer = (state = initialState, action: {
  type: string,
  payload: ProductType[]
}) => {
  switch(action.type){
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.OPEN_CART:
      return {
        ...state,
        isCartOpen: true
      };
    case types.CLOSE_CART:
      return {
        ...state,
        isCartOpen: false
      }

    default:
      return state
  }
}