import ShoppingBagIcon from '../../assets/shopping-bag.svg'
import * as C from './styles'

export function Product(){
  return (
    <C.Container>
      <C.ProductImage src="" alt="product image" />
      <C.InfoDiv className="info">
        <C.ProductInfo>
          <span>Apple Watch Series 4 GPS</span>
          <strong>R$399</strong>
        </C.ProductInfo>
        <C.ProductDescription>Redesigned from scratch and completely revised.</C.ProductDescription>
      </C.InfoDiv>
      <C.ButtonDiv>
        <C.Button>
          <img src={ShoppingBagIcon} alt="shopping bag icon" />
          <span>comprar</span>
        </C.Button>
      </C.ButtonDiv>
    </C.Container>
  )
}