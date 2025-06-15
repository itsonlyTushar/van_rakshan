import { useState } from "react";
import { Link, useLocation } from "react-router";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/img/logo.png";
import { navigation } from "./navigationConfig";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-gray-300/35">
      <div className="container mx-auto flex justify-between items-center px-2">
        <div className="sm:w-24 w-20">
          <Link to={"/"}>
            <img src={logo} alt="van-logo" />
          </Link>
        </div>

        {/* NAV FOR PC SCREENS */}
        <ul className="hidden md:flex items-center gap-6 text-white text-xl font-thin">
          {navigation.map((nav) => (
            <div key={nav.id}>
              <Link to={nav.path}>
                <li
                  className={` ${
                    router.pathname === nav.path && "bg-[#9DC08B]"
                  } hover:bg-[#9DC08B] hover:text-white rounded-2xl hover:transition-all hover:ease-in-out ease-in text-center cursor-pointer p-1 px-2 py-2`}
                >
                  {nav.tabName}
                </li>
              </Link>
            </div>
          ))}

          <Link to={"donate"}>
            <li className="bg-green-800 px-2 py-1 rounded-xl font-bold shadow-xs shadow-white/60">
              Donate
            </li>
          </Link>
        </ul>

        <button
          className="md:hidden text-white "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RxCross1 className="text-lg" />
          ) : (
            <RxHamburgerMenu className="text-lg" />
          )}
        </button>

        {/* NAV FOR MOBILE SCREENS  */}
        {isOpen && (
          <ul className="md:hidden gap-6 text-white text-xl font-thin px-2 text-[0.9rem] py-2">
            {navigation.map((nav) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                key={nav.id}
                to={nav.path}
              >
                <li
                  className={` ${
                    router.pathname === nav.path && "bg-[#9DC08B]"
                  } hover:bg-[#9DC08B] hover:text-white rounded-2xl hover:transition-all hover:ease-in-out ease-in text-center cursor-pointer p-1 px-1 py-1`}
                >
                  {nav.tabName}
                </li>
              </Link>
            ))}

            <Link to={"donate"}>
              <li className="mt-4  text-center bg-green-800 px-2 py-1 rounded-xl font-bold shadow-sm shadow-white/60">
                Donate
              </li>
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
