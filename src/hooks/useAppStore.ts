import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { ProductsState } from "../store/reducers/products"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export function useAppStore(){
  const dispatch = useAppDispatch()
  const productsState: ProductsState = useAppSelector(state => state.products)

  return { dispatch, productsState }
}