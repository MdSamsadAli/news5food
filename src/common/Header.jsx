import { Link } from "react-router-dom";
import { navbar } from "../assets/data";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "./../assets/images/logo-light.svg";
import { FaHeart, FaSearch } from "react-icons/fa";
import { IoChevronDown, IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const openNav = () => {
    setIsOpenNav(!isOpenNav);
  };
  return (
    <>
      <div className="w-10/12 m-auto bg-white">
        <div className="border rounded-xl my-5">
          <div className="px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="lg:hidden" onClick={openNav}>
                <RxHamburgerMenu />
              </div>
              <div className="">
                <img src={logo} alt="" />
              </div>
              <div
                className={`lg:translate-x-0 fixed lg:relative top-0 lg:w-auto w-full h-full lg:h-auto bg-white left-0 z-30 ${
                  isOpenNav ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out `}
              >
                <div
                  className="lg:hidden p-5 absolute right-1 top-1 z-50"
                  onClick={openNav}
                >
                  <IoClose />
                </div>
                <div className="lg:flex gap-10 lg-space-x-6">
                  {navbar.map((val, key) => (
                    <div
                      className="group relative uppercase font-semibold text-sm"
                      key={key}
                    >
                      {val.page ? (
                        <>
                          <div className="flex items-center gap-2">
                            <Link>{val.nav}</Link>
                            <button>
                              <IoChevronDown />
                            </button>
                          </div>

                          <div className="absolute top-full w-max opacity-0 group-hover:opacity-100">
                            <ul>
                              {val.page.map((val, subkey) => (
                                <li
                                  key={subkey}
                                  className="px-5 py-3 bg-white shadow-md"
                                >
                                  <Link className="hover:text-rose-600">
                                    {val.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <Link className="hover:text-rose-600">{val.nav}</Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-6">
                <div className="relative">
                  <FaHeart />
                  <span className="absolute -top-2 left-3 text-white bg-red-600 w-4 h-4 grid place-items-center text-xs rounded-full">
                    0
                  </span>
                </div>
                <div className="text-gray-900">
                  <FaSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
