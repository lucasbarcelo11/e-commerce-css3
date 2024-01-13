import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"


const Login = () => {

  const {handleSubmit, register, reset} = useForm()

  const {loginUser} = useAuth()

  const navigate = useNavigate()

  const submit = data => {
    loginUser(data, navigate)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="text" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id="password" />
      </div>
      <button>Login</button>
    </form>
  )
}

export default Login
