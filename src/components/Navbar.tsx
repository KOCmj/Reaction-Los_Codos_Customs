import { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Background from '../assets/images/bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <div className="text-center relative">
      <div className="absolute top-0 right-0 m-4">
        <div className="relative">
          <button
            onClick={toggleProfileMenu}
            className="flex items-center px-3 py-2 text-red-700 border rounded border-zinc-800 bg-zinc-800 hover:text-black hover:bg-red-700 hover:border-black"
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          {isProfileVisible && (
            <div className="absolute right-0 mt-2 bg-white rounded shadow-lg">
              <LoginButton className="p-3 rounded bg-red-700 hover:bg-red-900 hover:text-black cursor-pointer">
                <Link
                  to="/"
                  className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-black hover:bg-red-900"
                >
                  Login
                </Link>
              </LoginButton>
              <LogoutButton className="p-3 rounded bg-red-700 hover:bg-red-900 hover:text-black cursor-pointer">
                <Link
                  to="/"
                  className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-black hover:bg-red-900"
                >
                  Logout
                </Link>
              </LogoutButton>
            </div>
          )}
        </div>
      </div>
      <Link to="/" className="inline-block">
        <div
          className="bg-cover bg-center items-center align-center mb-1"
          style={{
            backgroundImage: `url(${Background})`,
            height: '200px',
            width: '100px',
            margin: '0 auto'
          }}
        ></div>
        <div>
          <span className="font-semibold text-xl text-red-700 tracking-tight block">Los Codos Customs</span>
        </div>
      </Link>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-red-700 mr-6">
        </div>
        <div className="text-sm lg:flex-grow">
          <Link
            to="/vehicles"
            className="p-3 mr-12 m-4 text-red-700 border rounded border-zinc-800 bg-zinc-800 hover:text-black hover:bg-red-700 hover:border-black justify-center cursor-pointer flex place-items-center mt-4 lg:inline-block lg:mt-0"
          >
            Vehicles
          </Link>
          <Link
            to="/dashboard"
            className="p-3 m-4 text-red-700 border rounded border-zinc-800 bg-zinc-800 hover:text-black hover:bg-red-700 hover:border-black justify-center cursor-pointer flex place-items-center mt-4 lg:inline-block lg:mt-0"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;