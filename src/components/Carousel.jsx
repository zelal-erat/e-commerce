import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const products = [
  {
    id: 1,
    title: "Vita Classic Product",
    description:
      "We know how large objects will act, but things on a small scale.",
    price: "$16.48",
    image: "https://images.placeholders.dev/350x150", // Resim yolunu buraya ekleyin
  },
  {
    id: 2,
    title: "Another Product",
    description: "This is another product description.",
    price: "$20.99",
    image: "https://images.placeholders.dev/350x150",
  },
];

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative w-full h-96 bg-green-600 text-white p-6 rounded-lg flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${products[currentIndex].image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      <div className="relative z-10 text-center">
        <p className="text-xs uppercase">Summer 2020</p>
        <h2 className="text-lg font-bold my-2">{products[currentIndex].title}</h2>
        <p className="text-sm">{products[currentIndex].description}</p>
        <p className="text-xl font-bold my-2">{products[currentIndex].price}</p>
        <button className="bg-green-700 px-4 py-2 rounded-lg">ADD TO CART</button>
      </div>
      <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4">
        <button onClick={prevSlide} className="p-2 z-10">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-2 z-10">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
