import { useNavigate } from "react-router-dom";

const CardProducts = ({ product }) => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/product/${product.id}`)
  }

  console.log(product)

  const handleAddCart = e => {
    e.stopPropagation()
  }

  return (
    <article onClick={handleNavigate} className="border rounded-xl w-full max-w-80 ">
      <header className="p-5 aspect-square border-y-2">
        <img className="w-full h-full object-contain" src={product.images[0].url} alt="images" />
      </header>
      <section className="p-6 grid grid-cols-2 gap-3">
        <h4 className="col-span-2 text-xs pl-2 text-gray-500">{product.brand}</h4>
        <h2 className="text-lg font-medium mb-3 col-span-2">{product.title}</h2>
        <article>
            <h3 className="text-xs pl-2 text-gray-500">Price</h3>
            <span className="text-lg font-medium mb-3">${product.price}</span>
        </article>
        <button className="text-white text-2xl bg-blue-700 rounded-3xl w-12 ml-16" onClick={handleAddCart}>
            <i  className='bx bx-cart'></i>
        </button>
      </section>
    </article>
  );
};

export default CardProducts;
