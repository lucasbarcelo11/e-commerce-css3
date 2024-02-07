import { useState } from "react"
import useCartApi from "../../hooks/useCartApi"


const ProductInfo = ({product}) => {

    const [counter, setCounter] = useState(1)

    const handleMinus = () => {
        if(counter -1 >= 1){
            setCounter(counter - 1)
        }
    }

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const {addProductInCart} = useCartApi()

    const handleAddCart = () => {
      const data = {
        quantity: counter,
        productId: product.id
      }
      addProductInCart(data)
    }

  return (
    <article>
      <h4>{product?.brand}</h4>
      <h3>{product?.title}</h3>
      <p>{product?.description}</p>
      <section>
        <h4>Price</h4>
        <span>${product?.price}</span>
      </section>
      <section>
        <h4>Quantity</h4>
        <div>
            <button onClick={handleMinus}>-</button>
            <span>{counter}</span>
            <button onClick={handlePlus}>+</button>
        </div>
      </section>
      <footer>
        <button onClick={handleAddCart}>Add to Cart <i className='bx bx-cart'></i></button>
      </footer>
    </article>
  )
}

export default ProductInfo
