import * as C from './styles'

export function CartItem(){
  return(
    <div>
      <button>X</button>
      <img src="" alt="" />
      <span>Apple Watch Series 4 GPS</span>
      <div>
        Qtd:
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <strong>R$399</strong>
    </div>
  )
}