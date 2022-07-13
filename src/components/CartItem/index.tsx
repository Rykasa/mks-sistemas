import * as C from './styles'

export function CartItem(){
  return(
    <C.Container>
      <C.CloseButton type="button">X</C.CloseButton>
      <C.ProductImage src="" alt="" />
      <C.ProductName>Apple Watch Series 4 GPS</C.ProductName>
      <C.AmountDiv>
        <C.AmountText>Qtd:</C.AmountText>
        <C.AmountButtonsContainer>
          <C.DecreaseButton>-</C.DecreaseButton>
          <C.Amount>1</C.Amount>
          <C.IncreaseButton>+</C.IncreaseButton>
        </C.AmountButtonsContainer>
      </C.AmountDiv>
      <C.Price>R$399</C.Price>
    </C.Container>
  )
}