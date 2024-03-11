import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-700  text-white">
      <Link to="/" className="text-xl font-semibold">
        E-commerce
      </Link>
      <nav>
        <ul className="flex space-x-4 lg:mr-10 lg:gap-10">
          <li className="text-3xl">
            <Link to="/login" className="hover:text-gray-400">
              <i className="bx bx-user-circle"></i>
            </Link>
          </li>
          <li className="text-3xl">
            <Link to="/register" className="hover:text-gray-400">
              <i className="bx bx-log-in"></i>
            </Link>
          </li>
          <li className="text-3xl">
            <Link to="/cart" className="hover:text-gray-400">
              <i class="bx bx-cart"></i>
            </Link>
          </li>
          <li className="text-3xl">
            <Link to="/purchases" className="hover:text-gray-400">
              <i class="bx bx-shopping-bag"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
