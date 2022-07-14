import { useAppStore } from '../../hooks/useAppStore';
import { removeItemFromCart } from '../../store';
import * as C from './styles'

interface CartItemProps{
  id: number;
  name: string;
  photo: string;
  price: string;
  amount: number;
}

export function CartItem({ name, id, photo, price, amount }: CartItemProps){
  const { dispatch, productsState } = useAppStore()

  function handleRemoveItem(){
    dispatch(removeItemFromCart(id))
  }

  return(
    <C.Container>
      <C.CloseButton 
        type="button"
        onClick={handleRemoveItem}
      >
        X</C.CloseButton>
      <C.ProductImage src={photo} alt="product image" />
      <C.ProductName>{name}</C.ProductName>
      <C.AmountDiv>
        <C.AmountText>Qtd:</C.AmountText>
        <C.AmountButtonsContainer>
          <C.DecreaseButton>-</C.DecreaseButton>
          <C.Amount>{amount}</C.Amount>
          <C.IncreaseButton>+</C.IncreaseButton>
        </C.AmountButtonsContainer>
      </C.AmountDiv>
      <C.Price>R${price}</C.Price>
    </C.Container>
  )
}