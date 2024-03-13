import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardProduct from '../HomePage/CardProducts'

const SimilarProduct = ({ product }) => {
  const [productsByCategory, getProductsByCategory] = useFetch();

  useEffect(() => {
    if (product) {
      getProductsByCategory(`/products?categoryId=${product.categoryId}`);
    }
  }, [product]);

  const cbFilter = prod => {
    if(prod.id !== product.id){
        return prod
    }
  }

  return (
    <div className="flex flex-col items-center mt-11">
    <h3 className="text-lg font-semibold text-center text-gray-800 mt-6">Similar Product</h3>
    <div className="grid lg:grid-cols-3 mt-10 gap-16 sm:grid-cols-2 sm:justify-center">
        {productsByCategory?.filter(cbFilter).map(prod => (
            <CardProduct
                key={prod.id}
                product={prod}
            />
        ))}
    </div>
</div>
  )
};

export default SimilarProduct;
