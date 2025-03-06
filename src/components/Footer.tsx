import React from "react";
import { Link } from "react-scroll";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

const Footer = () => {
  const menuItems = [
    { name: "About Us", to: "about" },
    { name: "Our Process", to: "process" },
    { name: "Menu", to: "menu" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact Us", to: "contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo1.png" alt="Hands on Food Logo" className="w-10 h-10" />
              <span className="font-bold text-xl">Hands on Food</span>
            </div>
            <p className="text-gray-400">
              Premium Cloud Kitchen & Gourmet Premixes for the perfect dining experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <FaFacebookF size={24} />
              </a>
              <a href="handsonfoodbymansi" className="hover:text-orange-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiLocationMarker className="text-orange-500" size={24} />
                <p className="text-gray-400">123 Foodie Street, Culinary District, 12345</p>
              </div>
              <div className="flex items-center gap-3">
                <HiMail className="text-orange-500" size={24} />
                <a href="mailto:handsonfood3@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                  handsonfood3@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <HiPhone className="text-orange-500" size={24} />
                <a href="tel:+91 9920018777" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +91 9920018777
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hands on Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
