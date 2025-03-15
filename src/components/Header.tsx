import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Home Helper
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/categories" className="hover:text-blue-500">
            Browse by Category
          </Link>
          <Link to="/cost-guides" className="hover:text-blue-500">
            Cost Guides
          </Link>
          <a href="#" className="hover:text-blue-500">
            For Pros
          </a>
          {/* Login Link Added Here */}
          <Link to="/login" className="hover:text-blue-500">
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <Menu size={24} onClick={toggleMenu} className="cursor-pointer" />
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 bg-white w-full shadow-md py-4">
            <Link
              to="/categories"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Browse by Category
            </Link>
            <Link
              to="/cost-guides"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Cost Guides
            </Link>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              For Pros
            </a>
            {/* Login Link Added Here */}
            <Link to="/login" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
