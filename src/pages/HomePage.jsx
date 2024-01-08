import { useSelector } from "react-redux";
import CardProducts from "../components/HomePage/CardProducts";

const HomePage = () => {
  const products = useSelector((reducer) => reducer.products);

  console.log(products);

  return (
    <div>
      <div>
        {
          products?.map(prod => (
            <CardProducts
              key={prod.id}
              product={prod}
            />
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
