import { useForm } from "react-hook-form"

const FilterPrice = ({setFromTo}) => {

  const { register, handleSubmit, reset } = useForm()

  const submit = data => {
    const from = Number(data.from.trim())
    const to = +data.to.trim()
    const obj = {
      from: from || 0,
      to: to || Infinity
    }
    setFromTo(obj)
  }

  return (
    <article>
      <details open='true'>
        <summary>Price</summary>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="">From</label>
                <input {...register('from')} className="border" type="number" id="from" />
            </div>
            <div>
                <label htmlFor="">To</label>
                <input {...register('to')} className="border" type="number" id="to" />
            </div>
            <button>Filter Price</button>
        </form>
      </details>
    </article>
  )
}

export default FilterPrice
