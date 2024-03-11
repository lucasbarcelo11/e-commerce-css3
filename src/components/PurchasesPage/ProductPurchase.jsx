import React from "react";

const ProductPurchase = ({ purch }) => {
  return (
    <article className="flex flex-col items-center">
      <section className="flex items-center gap-10 border-2 border-gray-500 w-[30rem] rounded-md">
        <header className="border-r-2 border-gray-500 pr-4">
          <img src={purch.product.images[0].url} alt="" width={150} />
        </header>
        <div>
          <h3>{purch.product.title}</h3>
          <div>{purch.quantity}</div>
          <div>${purch.quantity * purch.product.price}</div>
        </div>
      </section>
    </article>
  );
};

export default ProductPurchase;
