import { ProductType } from "../../actions";
import * as types from '../../types'

export interface ProductsState {
  products: {
    products: ProductType[]
  },
  isLoading: boolean,
  cart: ProductType[],
  amount: number,
  total: number,
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
  total: 0,
  isLoading: true,
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
        const hasItem = state.cart.filter((cartItem) => cartItem.id === action.payload.id)
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
      const tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload)
      return {
        ...state,
        cart: tempCart
      };
    case types.GET_TOTALS:
       let { total, amount } = state.cart.reduce((cartTotal, cartItem) =>{
        const { price, amount } = cartItem
        const itemTotal = parseInt(price) * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount

        return cartTotal
      }, {
        total: 0,
        amount: 0
      })
      return{
        ...state,
        amount,
        total
      };
    case types.TOGGLE_AMOUNT:
      const newCart = state.cart.map((cartItem) =>{
        if(cartItem.id === action.payload.id){
          if(action.payload.type === 'increase'){
            cartItem = {
              ...cartItem,
              amount: cartItem.amount + 1
            }
          }
          if(action.payload.type === 'decrease'){
            cartItem = {
              ...cartItem,
              amount: cartItem.amount - 1
            }
          }
        }
        return cartItem
      }).filter((cartItem) => cartItem.amount !== 0)

      return {
        ...state,
        cart: newCart,
      }

    default:
      return state
  }
}