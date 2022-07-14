import { all } from 'redux-saga/effects'
import products from './products'

export default function* rootSaga(): Generator<any>{
  return yield all([products])
}