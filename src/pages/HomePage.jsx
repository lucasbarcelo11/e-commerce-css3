import { useSelector } from "react-redux";
import CardProducts from "../components/HomePage/CardProducts";
import { useRef, useState } from "react";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";

const HomePage = () => {
  const products = useSelector((reducer) => reducer.products);

  const [nameValue, setNameValue] = useState("");
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const inputName = useRef();

  const onChangeFilterName = () => {
    setNameValue(inputName.current.value);
  };

  const cbFilter = (prod) => {
    //Filter By name
    const inputNameLower = nameValue.toLowerCase().trim();
    const nameReal = prod.title.toLowerCase();
    const filterName = nameReal.includes(inputNameLower);
    //Filter By Price
    const price = Number(prod.price);
    const filterPrice = fromTo.from <= price && price <= fromTo.to;

    return filterName && filterPrice;
  };

  return (
    <div className="flex w-full h-screen">
      <div className="lg:w-[20%] sm:w-full mt-20">
        <FilterCategory />
        <FilterPrice setFromTo={setFromTo} />
      </div>
      <div className="lg:w-3/4 mt-12 gap-10 flex flex-col items-center sm:w-full">
        <input
          className="border border-blue-700  rounded-md w-[60%] px-4 py-2 focus:outline-none focus:border-blue-700"
          value={nameValue}
          ref={inputName}
          onChange={onChangeFilterName}
          type="text"
        />
        <div className="flex flex-wrap gap-4 justify-center">
          {products?.filter(cbFilter).map((prod) => (
            <CardProducts key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
