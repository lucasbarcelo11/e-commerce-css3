import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { deleteCartG, getCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"


const useCartApi = () => {

    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'

    const distpach = useDispatch()

    //POST
    const addProductInCart = (data) => {
        const url = `${baseUrl}/cart`
        axios.post(url, data, getConfigToken())
         .then(res => distpach(getCartThunk()))
         .catch(err => console.log(err))
    }
    // DELETE
    const deleteProductInCart = (id) => {
        const url = `${baseUrl}/cart/${id}`
        axios.delete(url, getConfigToken())
         .then(res => {
            console.log(res.data)
            //distpach(getCartThunk())
            distpach(deleteCartG(id))
        })
         .catch(err => console.log(err))
    }

    return {addProductInCart, deleteProductInCart}
}

export default useCartApi
