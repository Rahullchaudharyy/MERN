

import { AiOutlineHome, AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
// import { Menu } from '@headlessui/react';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLoginMutation } from '../../redux/api/users';
import { logout } from '../../redux/features/auth/authSlice';
import { useState } from 'react';

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const ToggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLoginMutation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
  ];

  return (

  
<div className="flex justify-center items-center h-auto mt-4"> {/* Full height for centering */}
  <div className="relative z-50 bg-gray-600 border border-gray-700 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-6 py-4 rounded-lg mx-4">
    <section className="flex flex-col sm:flex-row justify-between items-center">
      {/* Section 1 */}
      <div className="flex justify-center items-center mb-4 sm:mb-0">
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2 text-white"
        >
          <AiOutlineHome className="mr-2 mt-3" size={26} />
          <span className="hidden sm:inline nav-item-name mt-3">Home</span>
        </Link>

        <Link
          to="/movies"
          className="flex items-center transition-transform transform hover:translate-x-2 ml-4 text-white"
        >
          <MdOutlineLocalMovies className="mr-2 mt-3" size={26} />
          <span className="hidden sm:inline nav-item-name mt-3">SHOP</span>
        </Link>
      </div>

      {/* Section 2 */}
      <div className="relative flex justify-center items-center">
        <button
          onClick={ToggleDropDown}
          className="text-white focus:outline-none"
        >
          {userInfo && (
            <span className="text-white">{userInfo.username}</span>
          )}

          {userInfo && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 ${ToggleDropDown ? "transform rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={ToggleDropDown ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          )}
        </button>

        {ToggleDropDown && userInfo && (
          <ul
            className={`absolute right-0 mt-2 w-40 bg-white text-gray-600 rounded-lg shadow-md ${
              !userInfo.isAdmin ? "top-12" : "top-16"
            }`}
          >
            {userInfo.isAdmin && (
              <li>
                <Link
                  to="/admin/movies/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </Link>
            </li>

            <li>
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        )}

        {!userInfo && (
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/login"
                className="flex items-center transition-transform transform hover:translate-x-2 text-white"
              >
                <AiOutlineLogin className="mr-2" size={26} />
                <span className="hidden sm:inline nav-item-name">LOGIN</span>
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="flex items-center transition-transform transform hover:translate-x-2 text-white"
              >
                <AiOutlineUserAdd size={26} />
                <span className="hidden sm:inline nav-item-name">REGISTER</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </section>
  </div>
</div>



  );
};

export default Navigation;
