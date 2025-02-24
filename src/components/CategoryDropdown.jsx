import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const categories = {
  Kadın: ["Bags", "Belts", "Cosmetics", "Bags", "Hats"],
  Erkek: ["Bags", "Belts", "Cosmetics", "Bags", "Hats"],
};

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      <Link
        to="/shop"
        className="text-[#737373] hover:text-[#252B42] transition-colors duration-200 py-2"
      >
        Shop
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="hover:text-[#252B42] transition-colors duration-200 py-2 pl-1"
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 left-0 top-full mt-1 w-screen px-4 sm:px-0 sm:w-[300px] md:w-[400px]">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            {/* Mobile Header */}
            <div className="sm:hidden flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="font-bold text-[#252B42]">Categories</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-6">
              {Object.entries(categories).map(([gender, items]) => (
                <div key={gender} className="space-y-3">
                  <h3 className="font-bold text-[#252B42] text-lg pb-2 border-b border-gray-100">
                    {gender}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={`/shop/${gender.toLowerCase()}/${item.toLowerCase()}`}
                          className="block text-[#737373] hover:text-[#252B42] transition-colors duration-200 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
