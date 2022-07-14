import { ProductType } from "../../actions";
import * as types from '../../types'

export interface ProductsState {
  products: {
    products: ProductType[]
  },
  isLoading: boolean,
  cart: ProductType[],
  amount: number,
  isCartOpen: boolean,
  error: string,
}

const initialState: ProductsState = {
  products: { 
    products: [{
      id: 0,
      name: '',
      brand: '',
      photo: '',
      description: '',
      price: '',
      amount: 1
    }]
  },
  cart: [],
  amount: 0,
  isLoading: false,
  isCartOpen: false,
  error: '',
}

export const productsReducer = (state = initialState, action: {
  type: string,
  payload: any
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
      };
    case types.ADD_ITEM_TO_CART:
      if(state.cart.length > 0){
        const hasItem = state.cart.filter((item) => item.id === action.payload.id)
        if(hasItem.length > 0){
          const tempCart = state.cart.map((cartItem) =>{
            if(cartItem.id === action.payload.id){
              return {
                ...cartItem,
                amount: cartItem.amount + 1
              }
            }
            return cartItem
          })
          return {
            ...state,
            cart: tempCart
          }
        }}
        return {
            ...state,
            cart: [...state.cart, action.payload]
        };
    case types.REMOVE_ITEM_FROM_CART:
      const tempCart = state.cart.filter((item) => item.id !== action.payload)
      return {
        ...state,
        cart: tempCart
      }

    default:
      return state
  }
}