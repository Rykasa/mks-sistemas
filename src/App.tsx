import { Header } from "./components/Header";
import { Product } from "./components/Product";
import * as C from './App.styles'
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <C.Main>
        <C.ProductSection>
          <C.SectionCenter>
            <C.ProductsList>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </C.ProductsList>
          </C.SectionCenter>
        </C.ProductSection>
      </C.Main>
      <Footer />
      <Cart />
    </>
  )
}

