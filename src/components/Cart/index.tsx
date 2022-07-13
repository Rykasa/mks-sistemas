import { CartItem } from "../CartItem";
import * as C from './styles'

export function Cart(){
  return(
    <C.Aside>
      <C.AsideCenter>
        <C.Header>
          <C.Title>Carrinho de compras</C.Title>
          <C.CloseButton type="button">X</C.CloseButton>
        </C.Header>
        <C.CartContainer>
          <C.CartList>
            <CartItem />
            <CartItem />
          </C.CartList>
          <C.TotalDiv>
            <span>Total:</span>
            <span>R$798</span>
          </C.TotalDiv>
        </C.CartContainer>
      </C.AsideCenter>
      <C.ButtonDiv>
        <C.Button type="button">Finalizar Compra</C.Button>
      </C.ButtonDiv>
    </C.Aside>
  )
}