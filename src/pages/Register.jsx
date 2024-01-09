import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const Register = () => {

  const {register, reset, handleSubmit}  = useForm()
  const {createUser} = useAuth()

  const submit = data => {
    createUser(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="username">UserName</label>
        <input {...register('username')} type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id="password" />
      </div>
      <div>
        <button>Create User</button>
      </div>
    </form>
  );
};

export default Register;
