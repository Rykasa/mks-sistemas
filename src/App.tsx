import * as C from './App.styles'
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getProductsRequest, RootState } from './store';
import { useEffect } from 'react';
import { ProductsState } from './store/reducers/products';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export function App() {
  const dispatch = useAppDispatch()
  const productsState: ProductsState = useAppSelector(state => state.products)

  useEffect(() =>{
    dispatch(getProductsRequest())
  }, [])

  
  return (
    <>
      <Header />
      <C.Main>
        <C.ProductSection>
          <C.SectionCenter>
            <C.ProductsList>
              {productsState.products.products.map((product) =>{
                return (
                  <Product key={product.id} {...product} />
                )
              })}
            </C.ProductsList>
          </C.SectionCenter>
        </C.ProductSection>
      </C.Main>
      <Footer />
      <Cart />
    </>
  )
}

