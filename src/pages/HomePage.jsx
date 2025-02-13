import React from "react";
import HeroSlider from "../components/HeroSlider";
import ShopCard from "../components/ShopCard";
import ProductPage from "./ProductPage";



export default function HomePage() {
  return (
    <div>
      {/* Slider */}
      <HeroSlider />
      <ShopCard />
      <ProductPage />


     
    </div>
  );
}
