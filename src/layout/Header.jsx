import { AlignRight, ChevronDown, Facebook, Instagram, Mail, Phone, Search, ShoppingCart, Twitter, UserRound, Youtube } from "lucide-react";
import { useState } from "react"; // Import useState for managing state

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track mobile menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle the shop dropdown
  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent default action of the link (page reload)
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
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
          <div className="hidden lg:flex space-x-4 text-[#737373] font-medium">
            <a href="">Home</a>
            <div className="relative">
              {/* Shop link with ChevronDown */}
              <a href="" className="flex" onClick={toggleDropdown}>
                Shop <ChevronDown />
              </a>

              {/* Dropdown menu for Men and Women */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white text-black shadow-lg w-40 rounded-md">
                  <ul className="space-y-2 text-sm p-3">
                    <li><a href="">Men</a></li>
                    <li><a href="">Women</a></li>
                  </ul>
                </div>
              )}
            </div>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Pages</a>
          </div>
          <div className="flex gap-4">
            <UserRound />
            <Search />
            <ShoppingCart />
            <AlignRight onClick={toggleMenu} /> {/* Toggle menu visibility when clicked */}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="flex justify-around lg:hidden">
            <nav>
              <ul className="p-7.5 text-3xl text-center space-y-5 text-[#737373] font-medium">
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      <div>
        <img src="https://images.placeholders.dev/350x150" alt="" />
      </div>
    </div>
  );
}
