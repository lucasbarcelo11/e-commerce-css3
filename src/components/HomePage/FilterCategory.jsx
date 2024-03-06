import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { getAllProductsThunk, getFilteredProductsThunk } from "../../store/slices/products.slice";
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

  const handleFilterCategories = id => {
    dispatch(getFilteredProductsThunk(id))
  }

  return (
    <details>
      <summary>Category</summary>
      <ul>
        <li onClick={handleAllCategories}>All Categories</li>
        {categories?.map((cat) => (
          <li onClick={() => handleFilterCategories(cat.id)} key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </details>
  );
};

export default FilterCategory;
