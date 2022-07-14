import * as types from '../../types'

export type ProductType = {
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  price: string;
  amount: number;
}

export function getProductsRequest(): {
  type: string
}{
  return {
    type: types.GET_PRODUCTS_REQUEST
  }
}
export function getProductsSuccess(products: ProductType[]): {
  type: string,
  payload: ProductType[]
}{
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload: products
  }
}
export function getProductsFailure(error: string): {
  type: string
  payload: string
}{
  return {
    type: types.GET_PRODUCTS_FAILURE,
    payload: error
  }
}

export function openCart(): {
  type: string
}{
  return {
    type: types.OPEN_CART
  }
}

export function closeCart(): {
  type: string
}{
  return {
    type: types.CLOSE_CART
  }
}

export function addItemToCart(CartItem: ProductType): {
  type: string
  payload: ProductType
}{
  return {
    type: types.ADD_ITEM_TO_CART,
    payload: CartItem
  }
}

export function removeItemFromCart(productId: number): {
  type: string
  payload: number
}{
  return {
    type: types.REMOVE_ITEM_FROM_CART,
    payload: productId
  }
}

export function getTotals(): {
  type: string
}{
  return {
    type: types.GET_TOTALS,
  }
}

export function toggleAmount(id: number, type: string): {
  type: string
  payload: {id: number, type: string}
}{
  return {
    type: types.TOGGLE_AMOUNT,
    payload: {id, type}
  }
}