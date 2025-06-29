import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { BASE_URL } from "../../../constant";
import { AnimatePresence, motion } from "motion/react";

const NavbarClient = () => {
  const [sidebarActive, setSideBarActive] = useState(false);
  const [collectionActive, setCollectionActive] = useState(false);
  const [products, setProducts] = useState([]);
  const [navHeight, setNavHeight] = useState(0);
  const nav = useNavigate();
  const navbarRef = useRef(null);
  const timeoutRef = useRef(null);

  const getAllProducts = async () => {
    try {
      const response = await axios(`${BASE_URL}/product`);
      setProducts(response.data.data.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if (navbarRef.current) {
      setNavHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCollectionActive(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setCollectionActive(false);
    }, 200);
  };

  const handleDetails = (id) => {
    nav(`product/${id}`);
  };

  return (
    <div>
      <div className="max-w-[1400px] mx-auto relative">
        <div
          ref={navbarRef}
          className="flex px-5 justify-between items-center relative z-10 bg-white"
        >
          <div>
            <NavLink to={"/"}>
              <img
                src="https://huge-shoes.myshopify.com/cdn/shop/files/shoe-logo-new_300x300.png?v=1613157234"
                alt=""
              />
            </NavLink>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 hover:text-purple-800 ${
                  isActive ? "text-purple-800" : ""
                }`
              }
            >
              Home
            </NavLink>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={"/collection"}
                className={({ isActive }) =>
                  `cursor-pointer transition duration-300 hover:text-purple-800 ${
                    isActive ? "text-purple-800" : ""
                  }`
                }
              >
                Collection
              </NavLink>

              <AnimatePresence>
                {collectionActive && (
                  <motion.div
                    key="collection-menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      top: 130,
                      left: 69,
                      width: "91vw",
                    }}
                    className="fixed items-center justify-evenly bg-white z-[100] py-6 shadow-[0px_2px_12px_rgba(0,0,0,0.35)] flex"
                  >
                    {products.map((p) => (
                      <div
                        onClick={() => handleDetails(p._id)}
                        className="cursor-pointer"
                        key={p._id}
                      >
                        <img
                          className="w-[300px] h-[300px]"
                          src={p.bannerImage}
                          alt=""
                        />
                        <button className="flex justify-between items-center bg-purple-800 w-full py-3 px-4 text-white font-semibold">
                          <span>{p.title}</span>
                          <span>${p.price.toFixed(2)}</span>
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to={"/shoes"}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 hover:text-purple-800 ${
                  isActive ? "text-purple-800" : ""
                }`
              }
            >
              Shoes
            </NavLink>
            <NavLink
              to={"/boots"}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 hover:text-purple-800 ${
                  isActive ? "text-purple-800" : ""
                }`
              }
            >
              Boots
            </NavLink>
            <NavLink
              to={"/climbing"}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 hover:text-purple-800 ${
                  isActive ? "text-purple-800" : ""
                }`
              }
            >
              Climbing
            </NavLink>
          </div>
          <div className="flex items-center gap-3 md:gap-5 text-xl">
            <button
              onClick={() => setSideBarActive(!sidebarActive)}
              className="flex lg:hidden items-center gap-1"
            >
              <IoMdMenu className="text-2xl" />
              <p className="text-lg hidden md:block cursor-pointer transition duration-300 hover:text-purple-800">
                Menu
              </p>
            </button>
            <button className="cursor-pointer transition duration-300 hover:text-purple-800">
              <FiSearch />
            </button>
            <NavLink to={"/login"} className="cursor-pointer transition duration-300 hover:text-purple-800">
              <FaUser />
            </NavLink>
            <button className="relative z-[10] cursor-pointer transition duration-300 hover:text-purple-800 group">
              <div>
                <FaBasketShopping />
              </div>
              <p className="absolute z-[10] w-4 h-4 bg-black text-white flex items-center transition duration-300 group-hover:bg-purple-800 justify-center rounded-full text-[10px] bottom-3 left-2">
                0
              </p>
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={() => setSideBarActive(false)}
        className={`${
          sidebarActive
            ? "bg-black/50 fixed top-0 left-0 h-screen w-screen block z-[40]"
            : "hidden"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 right-0 h-screen z-[60] bg-white w-full max-w-[300px] shadow-lg transform transition-transform duration-500 ease-in-out ${
            sidebarActive ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 flex flex-col text-xl gap-3">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 hover:text-purple-800 ${
                  isActive ? "text-purple-800" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/collection"}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 hover:text-purple-800 ${
                  isActive ? "text-purple-800" : ""
                }`
              }
            >
              Collection
            </NavLink>
            <NavLink
              to={"/shoes"}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 hover:text-purple-800 ${
                  isActive ? "text-purple-800" : ""
                }`
              }
            >
              Shoes
            </NavLink>
            <NavLink
              to={"/boots"}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 hover:text-purple-800 ${
                  isActive ? "text-purple-800" : ""
                }`
              }
            >
              Boots
            </NavLink>
            <NavLink
              to={"/climbing"}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 hover:text-purple-800 ${
                  isActive ? "text-purple-800" : ""
                }`
              }
            >
              Climbing
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarClient;
