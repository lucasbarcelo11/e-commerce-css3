import { useEffect } from "react"
import usePurchases from "../hooks/usePurchases"
import ProductPurchase from "../components/PurchasesPage/ProductPurchase"


const Purchases = () => {

  const {getPurchases, purchases} = usePurchases()

  useEffect(() => {
    getPurchases()
  },[])
  console.log(purchases)

  return (
    <section className="mt-24 flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold">My Purchases</h2>
      <div>
        {
          purchases?.map(purch => (
            <ProductPurchase
              key={purch.id}
              purch={purch}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Purchases
