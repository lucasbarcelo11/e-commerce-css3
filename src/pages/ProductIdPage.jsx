import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import SimilarProduct from "../components/ProductIdPage/SimilarProduct"


const ProductIdPage = () => {

  const {id} = useParams()

  const [product, getSingleProduct] = useFetch()

  useEffect(() => {
    getSingleProduct(`/products/${id}`)
  },[id])


  return (
    <div>
      <ProductInfo product={product}/>
      <SimilarProduct product={product}/>
    </div>
  )
}

export default ProductIdPage
