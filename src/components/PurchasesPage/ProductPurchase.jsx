import React from 'react'

const ProductPurchase = ({purch}) => {
  return (
    <article>
      <header>
        <img src={purch.product.images[0].url} alt="" width={250} />
      </header>
      <h3>{purch.product.title}</h3>
      <div>
        {purch.quantity}
      </div>
      <div>
        ${purch.quantity * purch.product.price}
      </div>
    </article>
  )
}

export default ProductPurchase
