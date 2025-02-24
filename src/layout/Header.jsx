import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "react-gravatar"; 
import { AlignRight, ChevronDown, Facebook, Instagram, Mail, Phone, Search, ShoppingCart, Twitter, UserRound, Youtube } from "lucide-react";
import { logoutUser } from "../actions/authAction";
import CategoryDropdown from "../components/CategoryDropdown";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch(); 

  const user = useSelector((state) => state.auth.user); 

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

  return (
    <div>
      <div className="hidden lg:flex items-center justify-between bg-[#252B42] space-x-6 text-white px-16 h-10">
        <div className="flex items-center space-x-2">
          <Phone />
          <span>(225) 555-0118</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail />
          <span>michelle.rivera@example.com</span>
        </div>
        <p>Follow Us and get a chance to win 80% off</p>
        <div className="flex items-center space-x-4">
          <p>Follow us:</p>
          <Instagram />
          <Youtube />
          <Facebook />
          <Twitter />
        </div>
      </div>

      <div>
        <div className="flex justify-around mt-4 lg:justify-between lg:px-16">
          <h1 className="font-bold">Bandage</h1>
          <nav className="hidden lg:flex items-center space-x-8 text-[#737373]">
            <Link to="/" className="hover:text-[#252B42] transition-colors duration-200 py-2">Home</Link>
            <CategoryDropdown />
            <Link to="/about" className="hover:text-[#252B42] transition-colors duration-200 py-2">About</Link>
            <Link to="/blog" className="hover:text-[#252B42] transition-colors duration-200 py-2">Blog</Link>
            <Link to="/contact" className="hover:text-[#252B42] transition-colors duration-200 py-2">Contact</Link>
            <Link to="/team" className="hover:text-[#252B42] transition-colors duration-200 py-2">Team</Link>
            <Link to="/pages" className="hover:text-[#252B42] transition-colors duration-200 py-2">Pages</Link>
          </nav>

          <ul className="flex gap-4 lg:text-sky-300 ">
            <li>
              {user ? (
                <div className="flex items-center gap-2">
                  <Gravatar email={user.email} size={30} className="rounded-full" />
                  <span className="text-sky-500 font-bold">{user.name}</span>
                  <button onClick={handleLogout} className="ml-2 text-sky-500 font-bold">Logout</button>
                </div>
              ) : (
                <Link to="/signup" className="btn lg:flex">
                  <UserRound className="icon" />
                  <span className="hidden lg:block font-bold text-sky-500">Login / register</span>
                </Link>
              )}
            </li>
            <li>
              <a href="#" className="btn">
                <Search className="icon" />
              </a>
            </li>
            <li>
              <a href="#" className="btn">
                <ShoppingCart className="icon" />
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu} className="btn lg:hidden">
                <AlignRight className="icon" />
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="flex justify-around lg:hidden">
            <nav>
              <ul className="p-7.5 text-3xl text-center space-y-5 text-[#737373] font-medium">
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
    </div>
  );
}
