import * as types from '../../types'

export type ProductType = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
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