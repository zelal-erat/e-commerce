import React from "react";
import HeroSlider from "../components/HeroSlider";
import ShopCard from "../components/ShopCard";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import Container from "../components/Container";
import BlogPage from "./BlogPage";



export default function HomePage() {
  return (
    <div>
      {/* Slider */}
      <HeroSlider />
      <ShopCard />
      
      <ProductCard />
      <Carousel/>
      <Container/>
      <BlogPage/>


     
    </div>
  );
}
