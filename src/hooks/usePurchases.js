import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { useState } from "react"
import { getCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const usePurchases = () => {

    const [purchases, setPurchases] = useState()

    const dispatch = useDispatch()

    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

    //POST
    const makePurchases = () => {
        axios.post(url, '',getConfigToken())
         .then(res =>{
             console.log(res.data)
             dispatch(getCartThunk())
            })
         .catch(err => console.log(err))
    }

    //GET
    const getPurchases = () => {
        axios.get(url, getConfigToken())
         .then(res => setPurchases(res.data))
         .catch(err => console.log(err))
    }

    return {makePurchases, getPurchases, purchases}

}

export default usePurchases
