import { useAppStore } from '../../hooks/useAppStore';
import { removeItemFromCart, toggleAmount } from '../../store';
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

  function handleDecreaseAmount(){
    dispatch(toggleAmount(id, 'decrease'))
  }

  function handleIncreaseAmount(){
    dispatch(toggleAmount(id, 'increase'))
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
          <C.DecreaseButton
            type="button"
            onClick={handleDecreaseAmount}
          >
            -</C.DecreaseButton>
          <C.Amount>{amount}</C.Amount>
          <C.IncreaseButton
            type="button"
            onClick={handleIncreaseAmount}
          >
            +</C.IncreaseButton>
        </C.AmountButtonsContainer>
      </C.AmountDiv>
      <C.Price>R${price}</C.Price>
    </C.Container>
  )
}