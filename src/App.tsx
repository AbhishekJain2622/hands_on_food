import { motion } from "framer-motion";
import MenuItem from "./components/MenuItem";
import { ChefHat, Clock, Package, Truck } from "lucide-react";
import ProcessCard from "./components/ProcessCard";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Importing icons
function App() {
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
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
    {
      icon: <ChefHat size={32} />,
      title: "Fresh Ingredients",
      description: "We source the finest ingredients daily",
    },
    {
      icon: <Package size={32} />,
      title: "Quality Packaging",
      description: "Sealed for freshness and safety",
    },
    {
      icon: <Clock size={32} />,
      title: "Quick Preparation",
      description: "Ready in minutes, perfect every time",
    },
    {
      icon: <Truck size={32} />,
      title: "Fast Delivery",
      description: "Right to your doorstep",
    },
  ];

  return (
    <>
      <div className="w-full min-h-[100vh] bg-white flex flex-col overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section id="hero" className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1543353071-873f17a7a088?w=1800"
              alt="Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div
            // id="menu"
            className="relative h-full flex items-center justify-center text-center px-4"
          >
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
              <Link
                to="menu" // This should exactly match the id of the menu section
                smooth={true}
                duration={500}
                offset={-70} // Adjust for navbar height
                className={`cursor-pointer font-medium hover:text-orange-500 transition-colors ${
                  isScrolled ? "text-gray-600" : "text-white"
                }`}
              >
                <motion.button
                  className="bg-[#EAAA00] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-transform transform hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                >
                  Explore Our Menu
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAAA00]">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-[#EAAA00]">
                Handsonfood Cloud Kitchen
              </span>
              , your go-to for <b>delicious dips</b>,{" "}
              <b>easy premix solutions</b>, and <b>party catering</b>. We make
              your food experience effortless yet amazing!
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
              <h3 className="text-xl font-semibold text-[#EAAA00]">
                Delicious Dips
              </h3>
              <p className="text-gray-600 mt-2">
                Freshly made dips with premium ingredients. Try our **guacamole,
                hummus, and more!**
              </p>
            </motion.div>

            {/* Feature 2 - Premix */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/2.png" alt="Premix" className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#EAAA00]">
                Quick Premix Solutions
              </h3>
              <p className="text-gray-600 mt-2">
                No more measuring! Our premixes guarantee a **perfect dish every
                time.**
              </p>
            </motion.div>

            {/* Feature 3 - Party Orders */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/3.png"
                alt="Party Orders"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#EAAA00]">
                Party Orders
              </h3>
              <p className="text-gray-600 mt-2">
                Hosting a party? Let us handle the **food, dips, and desserts!**
              </p>
            </motion.div>
          </div>

          {/* Final Call-to-Action */}
          <div id="menu" className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              At{" "}
              <span className="font-semibold text-[#EAAA00]">Handsonfood</span>
              , we promise **fresh flavors, quality ingredients, and great
              service.**
            </p>
          </div>
        </motion.section>


        {/* Product Section */}
        <MenuItem />
        <br />
        <br />
        <br />

        {/* Testimonial Section */}
        <TestimonialCarousel />

        {/* Process Section */}
        <motion.section
          id="process"
          className="py-20 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Our Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {processes.map((process, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }}>
                  <ProcessCard {...process} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#EAAA00] mb-6">
          Why Choose HandsOnFood?
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-lg">
          We ensure premium quality food, made with love and the finest ingredients.
        </p>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            {[...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="w-72 bg-white p-6 shadow-lg rounded-xl flex-shrink-0 border-2 border-[#EAAA00] transition transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-[#EAAA00]">{feature.title}</h3>
                <p className="text-gray-600 mt-3 text-md">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
 

{/* Contact Section */}
<motion.section
  id="contact"
  className="py-20"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="max-w-6xl mx-auto px-4 mb-16">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-center text-[#EAAA00] mb-16">
      Contact Us
    </h2>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Details Section */}
      <motion.div className="space-y-6 text-[#EAAA00]" whileHover={{ scale: 1.05 }}>
        <h3 className="text-3xl font-semibold text-[#EAAA00] mb-4">
          Get in Touch
        </h3>

        <div className="flex items-center space-x-4">
          <MapPin size={28} className="text-[#EAAA00]" />
          <p className="text-lg text-gray-800">123 Foodie Street, Culinary District, 12345</p>
        </div>
        <div className="flex items-center space-x-4">
          <Mail size={28} className="text-[#EAAA00]" />
          <p className="text-lg text-gray-800">handsonfood3@gmail.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <Phone size={28} className="text-[#EAAA00]" />
          <p className="text-lg text-gray-800">+91 9920018777</p>
        </div>

        {/* Google Map Below Phone Number */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg border border-[#EAAA00] mt-6">
          <iframe
            className="w-full h-[250px] md:h-[300px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093746!2d-122.41941568468267!3d37.77492927975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzMwLjkiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sin!4v1618379009056!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  </div>
</motion.section>



        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
