import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"; // HomePage bileşenini içeri aktar
import ProductPage from "../pages/ProductPage"; // ProductPage bileşenini içeri aktar
import AboutPage from "../pages/AboutPage"; // AboutPage bileşenini içeri aktar
import BlogPage from "../pages/BlogPage"; // BlogPage bileşenini içeri aktar
import ShopPage from "../pages/ShopPage";

export default function PageContent() {
  return (
    <div className="container mx-auto px-4">
      <Switch>
        {/* Sayfa yönlendirmelerini buraya ekle */}
        <Route path="/" exact component={HomePage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/blog" exact component={BlogPage} />
      </Switch>
    </div>
  );
}
