import { useState } from "react";
import {
  RiAlignJustify,
  RiUserLine,
  RiAddLine,
  RiPieChart2Line,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine,
} from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu móvil */}
      <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUserLine />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChart2Line />
        </button>
        <button onClick={toggleMenu} className="text-white p-2 rounded">
          {showMenu ? <RiCloseLine /> : <RiAlignJustify />}
        </button>
      </nav>
      <main className="lg:pl-24 grid grid-cols-1 lg:grid-cols-8 pb-20">
        <div className="lg:col-span-6 p-4">
          {/* Header */}
          <header className="">
            {/* Title and search */}
            <div className="flex flex-col md:flex-row md: justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">
                  Moyo´s <span className="text-[#ec7c6a] font-bold">Resto</span>
                </h1>
                <p className="text-gray-500">21 mayo 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    className="bg-[#1f1d2b] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>

            {/* Tabs */}
            <nav className="text-gray-300 flex justify-around md:justify-start md:gap-8 mb-6">
              <a
                href="#"
                className="relative py-2 pr-4 before:w-1/2 before:h-1 before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[2px] text-[#ec7c6a]"
              >
                Hot Dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Cold Dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Soup
              </a>
              <a href="#" className="py-2 pr-4">
                Grill
              </a>
            </nav>
          </header>

          {/* Title content */}
          <div className="flex justify-between mb-12">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1f1d2b] rounded-lg py-2 px-4">
              <RiArrowDownSLine />
              Dine In
            </button>
          </div>

          {/* Content */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <div className="bg-[#1f1d2b] p-4 rounded-lg flex flex-col items-center text-gray-300 text-center">
              <img
                src="plato 1.png"
                alt="plato 1"
                className="w-40 h-40 -mt-20 object-cover rounded-full "
              />
              <p className="text-xl font-bold">
                Speacy seasoned seafood nodles
              </p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1f1d2b] p-8 rounded-lg flex flex-col items-center text-gray-300 text-center">
              <img
                src="plato 2.png"
                alt="plato 2"
                className="w-40 h-40 -mt-20 object-cover rounded-full "
              />
              <p className="text-xl font-bold">
                Speacy seasoned seafood nodles
              </p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1f1d2b] p-8 rounded-lg flex flex-col items-center text-gray-300 text-center">
              <img
                src="plato 3.png"
                alt="plato 3"
                className="w-40 h-40 -mt-20 object-cover rounded-full "
              />
              <p className="text-xl font-bold">
                Speacy seasoned seafood nodles
              </p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1f1d2b] p-8 rounded-lg flex flex-col items-center text-gray-300 text-center">
              <img
                src="plato 4.png"
                alt="plato 4"
                className="w-40 h-40 -mt-20 object-cover rounded-full "
              />
              <p className="text-xl font-bold">
                Speacy seasoned seafood nodles
              </p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1f1d2b] p-8 rounded-lg flex flex-col items-center text-gray-300 text-center">
              <img
                src="plato 5.png"
                alt="plato 5"
                className="w-40 h-40 -mt-20 object-cover rounded-full "
              />
              <p className="text-xl font-bold">
                Speacy seasoned seafood nodles
              </p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1f1d2b] p-8 rounded-lg flex flex-col items-center text-gray-300 text-center">
              <img
                src="plato 6.png"
                alt="plato 6"
                className="w-40 h-40 -mt-20 object-cover rounded-full "
              />
              <p className="text-xl font-bold">
                Speacy seasoned seafood nodles
              </p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1f1d2b] w-full h-full">
          {/* Cart Orders */}
          <div className="relative">
            <RiCloseLine className="absolute left-4 top-4 p-2 box-content text-gray-300 bg-[#262837] rounded-lg text-xl" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
