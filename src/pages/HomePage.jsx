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
    <div className="flex">
      <div className="w-[20%]">
        <input
          className="border flex "
          value={nameValue}
          ref={inputName}
          onChange={onChangeFilterName}
          type="text"
        />
        <FilterCategory />
        <FilterPrice setFromTo={setFromTo} />
      </div>
      <div className="w-3/4 mt-32">
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
