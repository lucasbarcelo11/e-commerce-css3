import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"
import ProductInCart from "../components/CartPage/ProductInCart"
import usePurchases from "../hooks/usePurchases"

const CartPage = () => {

  const cart = useSelector(reducer => reducer.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  const totalPrice = cart.reduce((acc, cv) => {
    const subTotal = cv.quantity * cv.product.price 
    return acc + subTotal
  }, 0)

  const {makePurchases} = usePurchases()

  const handleCheckout = () => {
    makePurchases()
  }

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
      <footer>
        <span>Total</span>
        <h3>${totalPrice}</h3>
        <button onClick={handleCheckout}>Checkout</button>
      </footer>
    </section>
  )
}

export default CartPage
