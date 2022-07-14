import { call, put, all, takeLatest } from '@redux-saga/core/effects'
import { getProductsFailure, getProductsSuccess, ProductType } from '../../actions'
import * as types from '../../types'

let productsApi: ProductType[]
const productsRequest = async () =>{
  try{
    const request = await fetch('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
    const response = await request.json()
    productsApi = response
    return true
  }catch(error){
    return false
  }
}

export function* productsData(action: { type: string, payload: string }){
  try{
    yield call(productsRequest)
    yield put(getProductsSuccess(productsApi))
  }catch(error){
    yield put(getProductsFailure("Something went wrong"))
  }
}

export default all([takeLatest(types.GET_PRODUCTS_REQUEST, productsData)])