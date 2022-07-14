import ShoppingBagIcon from '../../assets/shopping-bag.svg'
import { useAppStore } from '../../hooks/useAppStore';
import { addItemToCart } from '../../store';
import * as C from './styles'

interface ProductProps{
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  price: string;
}

export function Product({ photo, name, price, description, brand, id }: ProductProps){
  const { dispatch, productsState } = useAppStore()
  function handleAddItemToCart(){
    dispatch(addItemToCart({id, name, photo, price, amount: 1, brand, description}))
  }

  return (
    <C.Container>
      <C.ProductImage src={photo} alt="product image" />
      <C.InfoDiv className="info">
        <C.ProductInfo>
          <span>{name}</span>
          <strong>R${price.replace('.00', '')}</strong>
        </C.ProductInfo>
        <C.ProductDescription>{description}</C.ProductDescription>
      </C.InfoDiv>
      <C.ButtonDiv>
        <C.Button
          type="button"
          onClick={handleAddItemToCart}
        >
          <img src={ShoppingBagIcon} alt="shopping bag icon" />
          <span>comprar</span>
        </C.Button>
      </C.ButtonDiv>
    </C.Container>
  )
}