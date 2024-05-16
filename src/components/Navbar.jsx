import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isOpen) {
      toggleSidebar();
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg relative rounded-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 md:mr-auto">
            <Link
              to="/"
              onClick={() => handleNavigation("/")}
              className="text-green-500 font-bold text-4xl"
            >
              Ecoyaan
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-8 text-gray-700">
              <Link
                to="/"
                onClick={() => handleNavigation("/")}
                className="hover:text-green-500 px-4 py-3 rounded-md text-xl font-semibold transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => handleNavigation("/about")}
                className="hover:text-green-500 px-4 py-3 rounded-md text-xl font-semibold transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/sell"
                onClick={() => handleNavigation("/sell")}
                className="hover:text-green-500 px-4 py-3 rounded-md text-xl font-semibold transition duration-300"
              >
                Sell on Ecoyaan
              </Link>
              <Link
                to="/careers"
                onClick={() => handleNavigation("/careers")}
                className="hover:text-green-500 px-4 py-3 rounded-md text-xl font-semibold transition duration-300"
              >
                Careers
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="hover:text-green-500 focus:outline-none focus:text-green-500"
              onClick={toggleSidebar}
            >
              <svg
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed inset-0 z-10 bg-white transition-transform duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 relative">
          <button
            className="absolute top-2 right-2 hover:bg-red-500 hover:text-white focus:outline-none focus:bg-red-600 rounded-full p-2 transition duration-300"
            onClick={toggleSidebar}
          >
            <IoMdClose className="text-2xl" />
          </button>
          <Link
            to="/"
            onClick={() => handleNavigation("/")}
            className="hover:bg-gray-200 hover:text-green-500 block px-4 py-3 rounded-md text-xl font-semibold transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => handleNavigation("/about")}
            className="hover:bg-gray-200 hover:text-green-500 block px-4 py-3 rounded-md text-xl font-semibold transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/sell"
            onClick={() => handleNavigation("/sell")}
            className="hover:bg-gray-200 hover:text-green-500 block px-4 py-3 rounded-md text-xl font-semibold transition duration-300"
          >
            Sell on Ecoyaan
          </Link>
          <Link
            to="/careers"
            onClick={() => handleNavigation("/careers")}
            className="hover:bg-gray-200 hover:text-green-500 block px-4 py-3 rounded-md text-xl font-semibold transition duration-300"
          >
            Careers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;