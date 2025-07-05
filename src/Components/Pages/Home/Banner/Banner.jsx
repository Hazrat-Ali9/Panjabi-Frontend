import React from "react";
import { AiOutlineShoppingCart, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
// Banner js
const Banner = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl">
          {/* Badge */}


          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            You will find
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              good quality
            </span>
            <span className="block text-blue-300">
              products here.
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Discover our premium collection of handpicked products. Every item is carefully selected to ensure exceptional quality and unbeatable value for our valued customers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to={'/allProducts/all'}>
              <button className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <AiOutlineShoppingCart className="mr-3 text-xl group-hover:scale-110 transition-transform duration-200" />
                Shop Now
                <AiOutlineArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>

            <button className="flex items-center justify-center px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300">
              <span>Explore Collection</span>
            </button>
          </div>



          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-300 text-sm">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">99%</div>
              <div className="text-gray-300 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-300 text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sale Badge */}
      <div className="absolute top-8 right-8 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">
        <div className="text-center">
          <div className="text-lg">MEGA SALE</div>
          <div className="text-sm">Up to 70% OFF</div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;