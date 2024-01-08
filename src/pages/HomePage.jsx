import { useSelector } from "react-redux";

const HomePage = () => {
  const products = useSelector(reducer => reducer.products);

  console.log(products);

  return <div>HomePage</div>;
};

export default HomePage;
