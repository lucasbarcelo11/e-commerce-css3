const CardProducts = ({ product }) => {
  return (
    <article className="border w-72 h-96">
      <header className="flex h-36 w-36 justify-center">
        <img src={product.images[0].url} alt="images" />
      </header>
      <section className="flex flex-col ">
        <h4>Title</h4>
        <h2>{product.title}</h2>
        <article>
            <h3>Price</h3>
            <span>${product.price}</span>
        </article>
        <button>
            <i className='bx bx-cart'></i>
        </button>
      </section>
    </article>
  );
};

export default CardProducts;
