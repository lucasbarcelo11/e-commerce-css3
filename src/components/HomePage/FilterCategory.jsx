import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import {
  getAllProductsThunk,
  getFilteredProductsThunk,
} from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";

const FilterCategory = () => {
  const [categories, getAllCategories] = useFetch();

  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  const handleAllCategories = () => {
    dispatch(getAllProductsThunk());
  };

  const handleFilterCategories = (id) => {
    dispatch(getFilteredProductsThunk(id));
  };

  return (
    <details open={true} className="border-2 shadow-lg rounded-xl">
      <summary className="cursor-pointer">Category</summary>
      <ul className="p-4">
        <li
          onClick={handleAllCategories}
          className="cursor-pointer text-blue-500 hover:text-blue-600 mb-2"
        >
          All Categories
        </li>
        {categories?.map((cat) => (
          <li
            onClick={() => handleFilterCategories(cat.id)}
            key={cat.id}
            className="cursor-pointer text-blue-500 hover:text-blue-600 mb-2"
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </details>
  );
};

export default FilterCategory;
