import { FaAirbnb, FaGlobe, FaUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <FaAirbnb className="h-8 w-auto text-[#FF385C]" />
            <span className="ml-2 text-xl font-bold text-[#FF385C] hidden sm:block">airbnb</span>
          </div>
          
          {/* Search bar */}
          <div className="hidden md:flex items-center border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
            <span className="font-medium text-sm">Anywhere</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="font-medium text-sm">Any week</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-gray-400 text-sm">Add guests</span>
            <div className="ml-2 bg-[#FF385C] p-2 rounded-full">
              <FiSearch className="h-4 w-4 text-white" />
            </div>
          </div>
          
          {/* User menu */}
          <div className="flex items-center">
            <button className="hidden md:block text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100">
              Airbnb your home
            </button>
            <button className="ml-4 p-2 rounded-full hover:bg-gray-100">
              <FaGlobe className="h-5 w-5" />
            </button>
            <div className="ml-4 flex items-center border rounded-full p-1 shadow-sm hover:shadow-md cursor-pointer">
              <GiHamburgerMenu className="h-5 w-5 mx-2" />
              <FaUserCircle className="h-8 w-8 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;