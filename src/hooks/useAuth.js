import axios from "axios"

const useAuth = () => {

    const createUser = (data) => {
        const url = 'https://fakestoreapi.com/users'
        axios.post(url, data)
         .then(res => console.log(res.data))
         .catch(err => console.log(err))
    }

    const loginUser = (data) => {
        const url = 'https://fakestoreapi.com/auth/login'
        axios.post(url, data)
         .then(res => console.log(res.data))
         .catch(err => console.log(err))
    }

    return {createUser, loginUser}

}
export default useAuth