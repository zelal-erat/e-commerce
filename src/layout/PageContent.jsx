import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage"; // Yeni bileşeni içe aktar
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import SignUpPage from "../pages/SignUpPage";

export default function PageContent() {
  return (
    <div className="container mx-auto px-4">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/product/:id" exact component={ProductDetailsPage} /> {/* Yeni Route */}
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/contact" exact component={ContactPage} />

        <Route path="/team" exact component={TeamPage} />
       
       
        <Route path="/signup" exact component={SignUpPage} />
      </Switch>
    </div>
  );
}
