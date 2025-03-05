import React from "react";
import { motion } from "framer-motion";
import { ChefHat, Clock, Package, Truck, MapPin, Mail, Phone } from "lucide-react";
import ProcessCard from "./components/ProcessCard";
import MenuItem from "./components/MenuItem";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const features = [
    {
      title: "Preservative-Free",
      description:
        "We take pride in offering products that are completely free from preservatives. No chemicals, just real, authentic flavors.",
    },
    {
      title: "Freshly Cut",
      description:
        "Our ingredients are freshly cut to ensure the highest level of flavor and nutrition, delivering a burst of freshness in every bite.",
    },
    {
      title: "Raw Materials Freshness",
      description:
        "We source only the freshest raw materials from local farms and trusted suppliers, ensuring every meal is packed with vitality and flavor.",
    },
    {
      title: "Made with Pure Love",
      description:
        "At HandsOnFood, we don’t just cook; we create food with care and passion, ensuring every bite is filled with love.",
    },
    {
      title: "No Chemicals",
      description:
        "We focus on natural ingredients with no artificial chemicals, ensuring pure and wholesome food.",
    },
    {
      title: "Authentic Flavors",
      description:
        "Using traditional cooking techniques, we bring out the best in every ingredient for a true taste experience.",
    },
    {
      title: "Handpicked Ingredients",
      description:
        "Each ingredient is handpicked to ensure premium quality and maximum freshness for a nutritious and delicious meal.",
    },
    {
      title: "Sustainable Sourcing",
      description:
        "We believe in sustainability and ethically source our ingredients to support farmers and protect the environment.",
    },
    {
      title: "Pure & Wholesome",
      description:
        "We stand by our commitment to purity, delivering food that nourishes your body and soul with every bite.",
    },
  ];


  const processes = [
    { icon: <ChefHat size={32} />, title: "Fresh Ingredients", description: "We source the finest ingredients daily" },
    { icon: <Package size={32} />, title: "Quality Packaging", description: "Sealed for freshness and safety" },
    { icon: <Clock size={32} />, title: "Quick Preparation", description: "Ready in minutes, perfect every time" },
    { icon: <Truck size={32} />, title: "Fast Delivery", description: "Right to your doorstep" },
  ];

  const menuItems = [
    { name: "Classic Biryani Mix", price: 299, description: "Authentic blend of aromatic spices", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500" },
    { name: "Butter Chicken Masala", price: 249, description: "Rich and creamy premix", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500" },
    { name: "Tandoori Spice Blend", price: 199, description: "Perfect marinade mix", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500" },
    { name: "Curry Base Mix", price: 179, description: "Versatile curry starter", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500" },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section id="hero" className="relative h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1543353071-873f17a7a088?w=1800" alt="Kitchen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              Hands on Food
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-white mb-8" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
              Premium Cloud Kitchen & Gourmet Premixes
            </motion.p>
            <motion.button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-transform transform hover:scale-105" whileHover={{ scale: 1.1 }}>
              Explore Our Menu
            </motion.button>
          </div>
        </div>
      </motion.section>
{/* About Section */}
<motion.section
  id="about"
  className="py-16 px-6 sm:px-8 md:px-12 bg-gray-50"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">About Us</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      
      {/* Image Section */}
      <motion.div
        className="w-full flex justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
          alt="Kitchen"
          className="rounded-lg shadow-lg w-full sm:max-w-md md:max-w-full"
        />
      </motion.div>

      {/* Text Section */}
      <div className="text-center md:text-left px-4">
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          At <strong>Hands on Food</strong>, we believe in making gourmet cooking accessible to everyone. 
          Our cloud kitchen delivers restaurant-quality meals, while our premium premixes bring 
          professional flavors to your home kitchen.
        </p>
      </div>
    
    </div>
  </div>
</motion.section>

<TestimonialCarousel/>

      {/* Process Section */}
      <motion.section id="process" className="py-20 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }}>
                <ProcessCard {...process} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
{/* ------------------------------------------- */}
<section className="w-full py-12 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose HandsOnFood?</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          At HandsOnFood, we believe in serving food that’s as pure and wholesome as the love we put into every dish.
        </p>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {[...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="w-64 bg-white p-6 shadow-md rounded-xl flex-shrink-0"
              >
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
{/* ------------------------------------------- */}
      {/* Menu Section */}
      <motion.section id="menu" className="py-20 px-4 bg-gray-50" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                <MenuItem {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="py-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div className="space-y-8" whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p>123 Foodie Street, Culinary District, 12345</p>
              <p>hello@handsonfood.com</p>
              <p>+1 (234) 567-8900</p>
            </motion.div>
            <ContactForm />
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default App;
