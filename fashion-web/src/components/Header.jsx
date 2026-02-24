import { FaSearch, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
function Header() {
  const [scrollded, setScrollded] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollded(window.scrollY > 5); //kéo xuống 100px thì header đổi màu
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 ${scrollded ? "bg-gray-200" : "bg-transparent"}`}
      >
        {/* Find Product */}
        <div className="w-full mx-auto px-4">
          <div className="grid grid-cols-6 items-center">
            {/* Logo */}
            <a className="flex col-span-1 items-start min-h-full" href="/">
              <img
                src={logo}
                alt="404 Studio"
                className="h-full w-auto object-contain hover:scale-110 transition-all"
              />
            </a>
            <div className="flex justify-center col-span-3 relative">
              {/* Menu */}
              {showSearch ? (
                <input
                  type="text"
                  placeholder="Tìm sản phẩm..."
                  className="w-[500px] px-10 py-3 text-base bg-white border-b-2 border-black outline-none placeholder-gray-400 transition-all duration-300 focus:border-gray-500"
                />
              ) : (
                <nav className="mx-2 hidden md:flex space-x-8 text-gray-600 text-xl items-center menu">
                  <a
                    href="#"
                    className="border-b-2 border-black pb-1 transition-all duration-300 hover:text-black hover:text-2xl mx-2"
                  >
                    Mới nhất
                  </a>
                  <a
                    href="#"
                    className="transition-all duration-300 hover:text-black hover:text-2xl"
                  >
                    Sale
                  </a>
                  <a
                    href="#"
                    className="transition-all duration-300 hover:text-black hover:text-2xl"
                  >
                    Bán chạy
                  </a>
                  <a
                    href="#"
                    className="transition-all duration-300 hover:text-black hover:text-2xl"
                  >
                    Unisex
                  </a>
                  <a
                    href="#"
                    className="transition-all duration-300 hover:text-black hover:text-2xl"
                  >
                    Bộ sưu tập
                  </a>
                </nav>
              )}
            </div>

            <div className="flex justify-center col-span-2 gap-6 text-4xl ">
              <button onClick={() => setShowSearch(!showSearch)}>
                <FaSearch className="transition-transform duration-300 hover:-translate-y-2" />
              </button>
              <button>
                <FaShoppingBag className="transition-transform duration-300 hover:-translate-y-2" />
              </button>
              <button>
                <FaUserCircle className="transition-transform duration-300 hover:-translate-y-2" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
