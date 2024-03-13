import React from "react";

const ProductPurchase = ({ purch }) => {
  return (
    <article className="flex flex-col items-center mt-10">
      <section className="flex items-center gap-10 border-2 border-gray-300 w-[30rem] rounded-md shadow-lg p-4">
        <header>
          <img
            src={purch.product.images[0].url}
            alt=""
            width={150}
            className="rounded-md"
          />
        </header>
        <div>
          <h3 className="text-xl font-semibold">{purch.product.title}</h3>
          <div className="text-gray-600">{purch.quantity} in cart</div>
          <div className="text-gray-800 font-bold">
            ${(purch.quantity * purch.product.price).toFixed(2)}
          </div>
        </div>
      </section>
    </article>
  );
};

export default ProductPurchase;
