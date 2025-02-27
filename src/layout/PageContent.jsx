import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
 // Yeni bileşeni içe aktar
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ShoppingCart from "../pages/ShoppingCart";

import ProtectedRoute from "../components/ProtectedRoute";
import CreateOrderPage from "../pages/CreateOrderPage";
import PaymentPage from "../pages/PaymentPage";




export default function PageContent() {
  return (
    <div className="container mx-auto px-4">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetailPage} />{/* Yeni Route */}
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/contact" exact component={ContactPage} />

        <Route path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
        <Route path="/team" exact component={TeamPage} />
        <Route path="/cart" exact component={ShoppingCart} />
       
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/login" exact component={LoginPage} />
        <ProtectedRoute path="/create-order" exact component={CreateOrderPage}/>
        <ProtectedRoute path="/payment" exact component={PaymentPage}/>
        
      </Switch>
    </div>
  );
}
