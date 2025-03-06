import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sapna Sanghvi",
    content:
      "Hands down, the best dips I've ever had! The Avocado dip is so fresh, and the hummus is creamy and flavorful. Perfect for my family get-togethers. I can't stop snacking on them!",
    rating: 5,
  },
  {
    name: "Raj M.",
    content:
      "I ordered a variety of dips for a party, and they were an absolute hit! Each one was so flavorful and unique. The flavors really stand out, and it’s clear they use high-quality ingredients. Highly recommend!",
    rating: 5,
  },
  {
    name: "Geeta Kulkarni",
    content:
      "The dips from Cloud Kitchen are a game-changer! They add such a burst of flavor to every meal. I always have a jar of the salsa in my fridge now – it’s that good!",
    rating: 5,
  },
  {
    name: "Sunita R.",
    content:
      "I’ve never had masala bhakri like this before! The spices are just right, and the convenience of having them vacuum-packed is a game-changer. I can enjoy a warm, flavorful snack or meal in minutes!",
    rating: 5,
  },
  {
    name: "Aakash L.",
    content:
      "I’m a big fan of traditional bhakri, and these are fantastic! The taste is authentic, and the vacuum packaging makes them last longer without losing freshness. I love having them on hand for busy days.",
    rating: 5,
  },
  {
    name: "Mira S.",
    content:
      "The masala bhakris are absolutely delicious! Packed with flavor, and the vacuum packing keeps them fresh for so long. I’m so glad I found these—they make for a quick, satisfying meal any time of the day!",
    rating: 5,
  },
  {
    name: "Anjali P.",
    content:
      "The Panchmukhiyu Sabji is hands down one of the best dishes I've ever tasted! The combination of spices is just perfect, and it’s packed with so much flavor. I love how wholesome and fresh it feels. Definitely a new family favorite!",
    rating: 5,
  },
  {
    name: "Ramesh V.",
    content:
      "I tried the Panchmukhiyu Sabji, and I’m hooked! The flavors are rich and balanced, and it tastes like something you'd get from a homemade recipe. It’s become my go-to comfort food now!",
    rating: 5,
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="testimonials" className="relative max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">What Our Customers Say</h2>

      <div className="bg-white rounded-xl shadow-lg p-8 text-center overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-orange-500 text-orange-500" />
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-6 italic">"{testimonials[currentIndex].content}"</p>
            <h4 className="text-xl font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition duration-300"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-orange-500 scale-125" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
