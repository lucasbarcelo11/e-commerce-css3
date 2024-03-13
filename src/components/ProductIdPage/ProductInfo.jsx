import { useState } from "react";
import useCartApi from "../../hooks/useCartApi";
import ProductSlider from "./ProductSlider";

const ProductInfo = ({ product }) => {
  const [counter, setCounter] = useState(1);

  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1);
    }
  };

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const { addProductInCart } = useCartApi();

  const handleAddCart = () => {
    const data = {
      quantity: counter,
      productId: product.id,
    };
    addProductInCart(data);
  };

  return (
    <article className="flex flex-col p-4 mt-20">
      <section className="flex flex-col items-center justify-center gap-6">
        <section>
          <ProductSlider product={product} />
        </section>
        <section className="w-[80%] md:w-[40%]">
          <h4 className="text-lg font-semibold text-gray-800 text-center">
            {product?.brand}
          </h4>
          <h3 className="text-xl font-semibold text-blue-700 text-center">
            {product?.title}
          </h3>
          <p className="text-gray-600 text-center">{product?.description}</p>
          <section className="mt-4 text-center">
            <h4 className="text-sm font-medium text-gray-700">Price</h4>
            <span className="text-lg font-semibold text-blue-700">
              ${product?.price}
            </span>
          </section>
          <section className="mt-4">
            <h4 className="flex text-sm font-medium text-gray-700 justify-center items-center">
              Quantity
            </h4>
            <div className="flex items-center justify-center mt-2">
              <button
                onClick={handleMinus}
                className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-1 rounded-full focus:outline-none"
              >
                -
              </button>
              <span className="mx-4 text-xl font-semibold text-gray-800">
                {counter}
              </span>
              <button
                onClick={handlePlus}
                className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-1 rounded-full focus:outline-none"
              >
                +
              </button>
            </div>
          </section>
          <footer className="flex mt-4 items-center justify-center">
            <button
              onClick={handleAddCart}
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center justify-center"
            >
              Add to Cart <i className="bx bx-cart ml-1"></i>
            </button>
          </footer>
        </section>
      </section>
    </article>
  );
};

export default ProductInfo;
