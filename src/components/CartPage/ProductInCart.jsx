import useCartApi from "../../hooks/useCartApi";

const ProductInCart = ({ prodCart }) => {
  const { deleteProductInCart } = useCartApi();

  const handleDeleteCart = () => {
    deleteProductInCart(prodCart.id);
  };

  return (
    <article className="flex justify-center items-center border border-gray-300 rounded-lg p-4">
      <header className="mr-4">
        <img
          src={prodCart.product.images[0].url}
          alt=""
          width={200}
          className="rounded-lg"
        />
      </header>
      <section className="flex flex-col">
        <h3 className="text-lg font-semibold">{prodCart.product.title}</h3>
        <span className="text-gray-600">{prodCart.quantity}</span>
        <button
          onClick={handleDeleteCart}
          className="mt-2 bg-red-500 text-white px-2 py-1 w-auto rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white"
        >
          <i className="bx bx-trash"></i>
        </button>
      </section>
      <footer className="ml-auto">
        <span className="text-gray-600">Subtotal: $</span>
        <span className="font-semibold">
          {prodCart.product.price * prodCart.quantity}
        </span>
      </footer>
    </article>
  );
};

export default ProductInCart;
