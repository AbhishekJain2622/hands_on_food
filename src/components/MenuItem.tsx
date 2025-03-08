import { motion } from "framer-motion";
import { ShoppingCart, Utensils, Leaf, Coffee } from "lucide-react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const menuItems = [
  {
    category: "Premix (100 gms)",
    icon: <Utensils className="text-[#EAAA00] w-6 h-6" />,
    items: [
      { name: "Punjabi - Red Gravy, Yellow Gravy, White Gravy, Dal Makhani, Dal Tadka", price: 175 },
      { name: "Italian - Red Arabiatta, Alfredo, Pink Pasta", price: 175 },
      { name: "Gujarati Kadhi", price: 135 },
      { name: "Gujarati Dal", price: 175 },
      { name: "Maharashtrian - Kolhapuri Misal", price: 175 },
      { name: "Maharashtrian - Thalipeeth", price: 155 },
      { name: "South Indian - Sambhar", price: 175 },
      { name: "South Indian - Coconut Chutney", price: 155 },
    ],
  },
  {
    category: "Breakfast (75/-)",
    icon: <Coffee className="text-[#EAAA00] w-6 h-6" />,
    items: [
      { name: "Upma", price: 75 },
      { name: "Poha", price: 75 },
      { name: "Sevai Upma", price: 75 },
    ],
  },
  {
    category: "Dips (300 ml)",
    icon: <Leaf className="text-[#EAAA00] w-6 h-6" />,
    items: [
      { name: "Salsa", price: 350 },
      { name: "Schezwan", price: 325 },
      { name: "Pesto", price: 325 },
      { name: "Cheese", price: 350 },
      { name: "Hummus (Beetroot, Classic, Mint)", price: 325 },
      { name: "Chipotle", price: 325 },
      { name: "Tandoori", price: 325 },
      { name: "Marinara", price: 325 },
      { name: "Avocado", price: 350 },
    ],
  },
  {
    category: "Thepla and Bhakri (Vacuum Pack)",
    icon: <Utensils className="text-[#EAAA00] w-6 h-6" />,
    items: [
      { name: "Methi Thepla (per kg)", price: 550 },
      { name: "Sada Thepla (per kg)", price: 500 },
      { name: "Garlic Thepla (per kg)", price: 550 },
      { name: "Sada Bhakri (per piece)", price: 25 },
      { name: "Masala Bhakri (per piece)", price: 35 },
      { name: "Vacuum cost extra", price: null },
    ],
  },
  {
    category: "Pancake Premix (100 gms)",
    icon: <ShoppingCart className="text-[#EAAA00] w-6 h-6" />,
    items: [{ name: "Oats and Vanilla Pancake", price: 175 }],
  },
];

const MenuItem = () => {
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <section id="menu" className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-yellow-50 to-[#EAAA00]/20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#EAAA00] drop-shadow-lg">Our Menu</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Explore our wide range of <strong>premixes, dips, traditional items, and more!</strong>
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((menu, index) => (
          <motion.div
            key={index}
            className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#EAAA00]/50"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3">
              {menu.icon}
              <h3 className="text-xl font-semibold text-[#EAAA00]">{menu.category}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              {menu.items.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center text-lg">
                  <span>{item.name}</span>
                  {item.price !== null ? (
                    <span className="text-gray-900 font-semibold">₹{item.price}/-</span>
                  ) : (
                    <span className="text-gray-500 italic">(Price on request)</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="max-w-3xl mx-auto mt-12 text-center">
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70} // Adjust for navbar height
          className={`cursor-pointer font-medium hover:text-[#EAAA00] transition-colors ${
            isScrolled ? "text-gray-600" : "text-white"
          }`}
        >
          <motion.button
            className="bg-[#EAAA00] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#D48F00] transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Order Now 🍽️
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default MenuItem;
