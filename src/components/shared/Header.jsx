import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      <Link to="/" className="text-xl font-semibold">
        E-commerce
      </Link>
      <nav>
        <ul className="flex space-x-4 lg:mr-10 lg:gap-10">
          <li>
            <Link to="/login" className="hover:text-gray-400">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-400">
              Register
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-400">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/purchases" className="hover:text-gray-400">
              Purchases
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
