import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const submit = (data) => {
    createUser(data, navigate);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="mt-28 sm:mt-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md w-full md:w-[80%] lg:w-[30%] mx-auto"
    >
      <div className="flex flex-col mb-4">
        <label htmlFor="firstname" className="mb-1">
          First Name
        </label>
        <input
          {...register("firstName")}
          type="text"
          id="firstname"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="lastname" className="mb-1">
          Last Name
        </label>
        <input
          {...register("lastName")}
          type="text"
          id="lastname"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="mb-1">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="password" className="mb-1">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          id="password"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="phone" className="mb-1">
          Phone
        </label>
        <input
          {...register("phone")}
          type="text"
          id="phone"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-700"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Create User
      </button>
    </form>
  );
};

export default Register;
