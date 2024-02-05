import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"
import ProductInCart from "../components/CartPage/ProductInCart"

const CartPage = () => {

  const cart = useSelector(reducer => reducer.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  console.log(cart)
  return (
    <section>
      <h2>Cart</h2>
      <div>
        {
          cart.map(prod => (
            <ProductInCart
              key={prod.id}
              prodCart={prod}
            />
          ))
        }
      </div>
    </section>
  )
}

export default CartPage
