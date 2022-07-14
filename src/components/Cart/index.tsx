import { useAppStore } from "../../hooks/useAppStore";
import { closeCart } from "../../store";
import { CartItem } from "../CartItem";
import * as C from './styles'

export function Cart(){
  const { dispatch, productsState } = useAppStore()
  function handleCloseModal(){
    dispatch(closeCart())
  }

  return(
    <C.Aside isCartOpen={productsState.isCartOpen}>
      <C.AsideCenter>
        <C.Header>
          <C.Title>Carrinho de compras</C.Title>
          <C.CloseButton 
            type="button" 
            onClick={handleCloseModal}
          >
            X</C.CloseButton>
        </C.Header>
        <C.CartContainer>
          <C.CartList>
            {productsState.cart.length > 0 && (
              productsState.cart.map((item) =>{
              return (
                <CartItem key={item.id} {...item} />
              )
            }))}
          </C.CartList>
          <C.TotalDiv>
            <span>Total:</span>
            <span>R${productsState.total}</span>
          </C.TotalDiv>
        </C.CartContainer>
      </C.AsideCenter>
      <C.ButtonDiv>
        <C.Button type="button">Finalizar Compra</C.Button>
      </C.ButtonDiv>
    </C.Aside>
  )
}