import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { handleSubmit, register, reset } = useForm();

  const { loginUser } = useAuth();

  const navigate = useNavigate();

  const submit = (data) => {
    loginUser(data, navigate);
  };

  return (
    <div className="flex justify-center items-center mt-32">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-blue-700 p-6 rounded-lg shadow-md w-[30%] "
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white mb-2">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
