

import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "react-gravatar"; 
import { AlignRight, ChevronDown, Facebook, Instagram, Mail, Phone, Search, ShoppingCart, Twitter, UserRound, Youtube } from "lucide-react";
import { logoutUser } from "../actions/authAction";
import { toggleCart } from "../reducers/cartReducer";
import CategoryDropdown from "../components/CategoryDropdown";
import CartDropdown from "../components/CartDropdown";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch(); 

  const user = useSelector((state) => state.auth.user);
  const { cart, isOpen } = useSelector((state) => state.cart);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser()); 
  };

  const cartItemCount = cart.reduce((total, item) => total + item.count, 0);

  return (
    <div>
      <div className="hidden lg:flex items-center justify-between bg-[#252B42] text-white px-4 lg:px-16 h-10">
        <div className="flex items-center space-x-2">
          <Phone />
          <span>(225) 555-0118</span>
        </div>
        <div className="hidden lg:flex items-center space-x-2">
          <Mail />
          <span>michelle.rivera@example.com</span>
        </div>
        <div className="hidden lg:block">Follow Us and get a chance to win 80% off</div>
        <div className="hidden lg:flex items-center space-x-4">
          <p>Follow us:</p>
          <Instagram />
          <Youtube />
          <Facebook />
          <Twitter />
        </div>
      </div>

      <div className="flex justify-between items-center px-4 lg:px-16 py-4">
        <h1 className="font-bold">Bandage</h1>
        <nav className="hidden lg:flex items-center space-x-8 text-[#737373]">
          <Link to="/" className="hover:text-[#252B42] transition-colors duration-200 py-2">Home</Link>
          <CategoryDropdown />
          <Link to="/about" className="hover:text-[#252B42] transition-colors duration-200 py-2">About</Link>
          <Link to="/blog" className="hover:text-[#252B42] transition-colors duration-200 py-2">Blog</Link>
          <Link to="/contact" className="hover:text-[#252B42] transition-colors duration-200 py-2">Contact</Link>
        </nav>
        
        <ul className="flex gap-4">
          <li className="relative">
            {user ? (
              <div className="relative">
                <button 
                  onClick={toggleDropdown} 
                  className="flex items-center gap-2 text-sky-500 font-bold"
                >
                  <Gravatar email={user.email} size={30} className="rounded-full" />
                  <span>{user.name}</span>
                  <ChevronDown size={18} />
                </button>
                {isDropdownOpen && (
                  <div className=" max-w-[120px] lg:max-w-[180px] absolute right-0 mt-2 w-48 bg-white shadow-md rounded z-50 border border-gray-200">
                    <Link 
                      to="/previous-orders" 
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      Önceki Siparişlerim
                    </Link>
                    <button 
                      onClick={handleLogout} 
                      className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/signup" className="hidden lg:flex">
                <UserRound className="icon" />
                <span className="font-bold text-sky-500">Login / register</span>
              </Link>
            )}
          </li>
          <li>
            <button className="btn">
              <Search className="icon" />
            </button>
          </li>
          <li className="relative">
            <button onClick={() => dispatch(toggleCart())} className="btn flex items-center">
              <ShoppingCart className="icon" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            {isOpen && <CartDropdown />}
          </li>
          <li>
            <button onClick={toggleMenu} className="lg:hidden">
              <AlignRight className="icon" />
            </button>
          </li>
        </ul>
      </div>
      
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden z-40">
          <nav>
            <ul className="p-4 text-xl text-center space-y-4 text-[#737373] font-medium">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/team">Team</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}