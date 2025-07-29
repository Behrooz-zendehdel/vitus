import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center focus:outline-none bg-transparent border-0 p-0 m-0"
            style={{ background: 'none' }}
          >
            <span className="text-xl font-bold text-gray-800">ویتوس</span>
          </button>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('top-products')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm px-3"
            >
              محصولات برتر
            </button>
            <button 
              onClick={() => handleNavClick('product-hose')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm px-3"
            >
              محصولات شلنگ
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm px-3"
            >
              خدمات ویژه
            </button>
            <button 
              onClick={() => handleNavClick('agent-section')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm px-3"
            >
              نمایندگی
            </button>
            <Link 
              to="/aboutme"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm px-3"
            >
              درباره ما
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href="tel:09129628596"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
            >
              <FaPhone className="text-xs" />
              تماس با ما
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 transition-colors p-2"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="py-4 space-y-3">
              <button 
                onClick={() => handleNavClick('top-products')}
                className="block w-full text-right text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 hover:bg-gray-50 rounded-lg"
              >
                محصولات برتر
              </button>
              <button 
                onClick={() => handleNavClick('product-hose')}
                className="block w-full text-right text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 hover:bg-gray-50 rounded-lg"
              >
                محصولات شلنگ
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className="block w-full text-right text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 hover:bg-gray-50 rounded-lg"
              >
                خدمات ویژه
              </button>
              <button 
                onClick={() => handleNavClick('agent-section')}
                className="block w-full text-right text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 hover:bg-gray-50 rounded-lg"
              >
                نمایندگی
              </button>
              <Link 
                to="/aboutme"
                className="block w-full text-right text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 hover:bg-gray-50 rounded-lg"
              >
                درباره ما
              </Link>
              <div className="pt-2 border-t border-gray-100">
                <a 
                  href="tel:09129628596"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium"
                >
                  <FaPhone className="inline mr-2" />
                  تماس با ما
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
