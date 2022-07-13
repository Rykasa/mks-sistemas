import CartIcon from '../../assets/cart.svg'
import * as C from './styles'

export function Header(){
  return(
    <C.HeaderContainer>
      <C.HeaderCenter>
        <C.Logo className="logo">
          <strong>MKS <span>Sistemas</span></strong>
        </C.Logo>
        <C.CartButton>
          <C.CartImg src={CartIcon} alt="cart icon" />
          <C.Amount>0</C.Amount>
        </C.CartButton>
      </C.HeaderCenter>
    </C.HeaderContainer>
  )
}