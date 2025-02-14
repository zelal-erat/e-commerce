import React from "react";
import HeroSlider from "../components/HeroSlider";
import ShopCard from "../components/ShopCard";
import ProductCard from "../components/ProductCard";



export default function HomePage() {
  return (
    <div>
      {/* Slider */}
      <HeroSlider />
      <ShopCard />
      <ProductCard />


     
    </div>
  );
}
