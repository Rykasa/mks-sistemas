import * as C from './App.styles'
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, getProductsRequest, getTotals, RootState } from './store';
import { useEffect, useState } from 'react';
import { ProductsState } from './store/reducers/products';
import Skeleton from './components/Skeleton';
import { LoadingProductList } from './components/Shimmer/LoadingProductsList';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export function App() {
  const dispatch = useAppDispatch()
  const productsState: ProductsState = useAppSelector(state => state.products)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    dispatch(getProductsRequest())
  }, [])

  useEffect(() =>{
    dispatch(getTotals())
  }, [productsState.cart])

  if(productsState.isLoading){
    return (
      <>
        <LoadingProductList />
      </>
    )
  }

  
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

