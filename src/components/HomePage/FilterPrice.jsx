import { useForm } from "react-hook-form";

const FilterPrice = ({ setFromTo }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const from = Number(data.from.trim());
    const to = +data.to.trim();
    const obj = {
      from: from || 0,
      to: to || Infinity,
    };
    setFromTo(obj);
  };

  return (
    <article>
      <details open={true} className="border-2 shadow-lg rounded-xl">
        <summary className="cursor-pointer">Price</summary>
        <form onSubmit={handleSubmit(submit)} className="p-4">
          <div className="mb-4">
            <label htmlFor="from" className="block mb-1">
              From
            </label>
            <input
              {...register("from")}
              className="border border-gray-400 rounded px-3 py-2 w-full"
              type="number"
              id="from"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="to" className="block mb-1">
              To
            </label>
            <input
              {...register("to")}
              className="border border-gray-400 rounded px-3 py-2 w-full"
              type="number"
              id="to"
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Filter Price
          </button>
        </form>
      </details>
    </article>
  );
};

export default FilterPrice;
