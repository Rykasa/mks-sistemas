import CartIcon from '../../assets/cart.svg'
import { useAppStore } from '../../hooks/useAppStore'
import { openCart } from '../../store'
import * as C from './styles'

export function Header(){
  const { dispatch, productsState } = useAppStore()

  function handleOpenCart(){
    dispatch(openCart())
  }

  return(
    <C.HeaderContainer>
      <C.HeaderCenter>
        <C.Logo className="logo">
          <strong>MKS <span>Sistemas</span></strong>
        </C.Logo>
        <C.CartButton
          type="button"
          onClick={handleOpenCart}
        >
          <C.CartImg src={CartIcon} alt="cart icon" />
          <C.Amount>{productsState.cart.length}</C.Amount>
        </C.CartButton>
      </C.HeaderCenter>
    </C.HeaderContainer>
  )
}