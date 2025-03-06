import React from "react";
import { motion } from "framer-motion";
import { ChefHat, Clock, Package, Truck, MapPin, Mail, Phone } from "lucide-react";
import ProcessCard from "./components/ProcessCard";
import ProductSection from "./components/MenuItem";
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



  return (
    <>
   <div className="w-full min-h-[100vh] bg-white flex flex-col">
      <Navbar />

      <section id="hero" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?w=1800"
          alt="Kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div>
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hands on Food
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-white mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Premium Cloud Kitchen & Gourmet Premixes
          </motion.p>
          <motion.button
            className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Explore Our Menu
          </motion.button>
        </div>
      </div>
    </section>
      <motion.section
      id="about"
      className="relative bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/background.jpg" 
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600">
          About Us
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-orange-500">Handsonfood Cloud Kitchen</span>, your go-to for <b>delicious dips</b>, <b>easy premix solutions</b>, and <b>party catering</b>. We make your food experience effortless yet amazing!
        </p>
      </div>

      {/* Specialties Section */}
      <div className="mt-12 grid gap-10 md:grid-cols-3 text-center">
        {/* Feature 1 - Dips */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/1.png" alt="Dips" className="w-20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-orange-500">Delicious Dips</h3>
          <p className="text-gray-600 mt-2">
            Freshly made dips with premium ingredients. Try our **guacamole, hummus, and more!**
          </p>
        </motion.div>

        {/* Feature 2 - Premix */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/2.png" alt="Premix" className="w-20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-orange-500">Quick Premix Solutions</h3>
          <p className="text-gray-600 mt-2">
            No more measuring! Our premixes guarantee a **perfect dish every time.**
          </p>
        </motion.div>

        {/* Feature 3 - Party Orders */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/3.png" alt="Party Orders" className="w-20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-orange-500">Party Orders</h3>
          <p className="text-gray-600 mt-2">
            Hosting a party? Let us handle the **food, dips, and desserts!**
          </p>
        </motion.div>
      </div>

      {/* Final Call-to-Action */}
      <div className="max-w-3xl mx-auto mt-12 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-orange-600">Handsonfood</span>, we promise **fresh flavors, quality ingredients, and great service.**
        </p>
        <motion.a
          href="/menu"
          className="inline-block mt-6 px-8 py-3 bg-orange-500 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Explore Our Menu 🍽️
        </motion.a>
      </div>
    </motion.section>




<ProductSection/>

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
    </>
  );
}

export default App;
