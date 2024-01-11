import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const {register, reset, handleSubmit}  = useForm()
  const {createUser} = useAuth()
  const navigate = useNavigate()

  const submit = data => {
    createUser(data, navigate)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone:''
    })
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input {...register('firstName')} type="text" id="firstname" />
      </div>
      <div>
        <label htmlFor="lastname">lastName</label>
        <input {...register('lastName')} type="text" id="lastname" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id="password" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input {...register('phone')} type="text" id="phone" />
      </div>
      <div>
        <button>Create User</button>
      </div>
    </form>
  );
};

export default Register;
