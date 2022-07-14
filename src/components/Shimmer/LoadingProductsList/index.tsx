import Card from '../../Card'
import Skeleton from '../../Skeleton'
import { Container } from './styles'

export function LoadingProductList(){
  return(
    <Container>
      <Card className="header">
        <div>
          <Skeleton className="cart-button" />
        </div>
      </Card>
      <main>
        <div className='center'>
          <div className="list">
            {Array(8).fill(0).map((item, index) =>{
              return(
                <Card key={index}>
                  <Skeleton className="product" />
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </Container>
  )
}