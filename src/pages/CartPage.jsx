import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../store/slices/cart.slice";
import { useEffect } from "react";
import ProductInCart from "../components/CartPage/ProductInCart";
import usePurchases from "../hooks/usePurchases";

const CartPage = () => {
  const cart = useSelector((reducer) => reducer.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  const totalPrice = cart.reduce((acc, cv) => {
    const subTotal = cv.quantity * cv.product.price;
    return acc + subTotal;
  }, 0);

  const { makePurchases } = usePurchases();

  const handleCheckout = () => {
    makePurchases();
  };

  return (
    <section className="flex mt-20 justify-center items-center flex-col">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {cart.map((prod) => (
          <ProductInCart key={prod.id} prodCart={prod} />
        ))}
      </div>
      <footer className="mt-8">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Total</span>
          <h3 className="text-2xl font-bold">${totalPrice}</h3>
        </div>
        <button
          onClick={handleCheckout}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
        >
          Checkout
        </button>
      </footer>
    </section>
  );
};

export default CartPage;
