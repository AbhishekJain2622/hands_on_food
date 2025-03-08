import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        {" "}
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {" "}
          {/* Logo */}{" "}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center gap-3 md:gap-4 cursor-pointer"
          >
            {" "}
            <img
              src="/logo1.png"
              alt="Hands on Food Logo"
              width={250}
              height={300}
              className="object-contain h-16 w-auto transition-transform duration-300 hover:scale-110"
            />{" "}
            <span
              className={`font-bold text-xl transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {" "}
            </span>{" "}
          </Link>{" "}
          {/* Desktop Navigation */}{" "}
          <div className="hidden md:flex items-center gap-6">
            {" "}
            {["About", "Process", "Menu", "Testimonials", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`cursor-pointer font-medium transition-all duration-300 hover:text-yellow-500 ${
                    isScrolled ? "text-gray-600" : "text-white"
                  }`}
                >
                  {" "}
                  {item}{" "}
                </Link>
              )
            )}{" "}
          </div>{" "}
          {/* Mobile Menu Button */}{" "}
          <button
            className="md:hidden focus:outline-none transition-transform duration-300 hover:text-yellow-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {" "}
            {isOpen ? (
              <FiX className="text-3xl text-orange-500 transform rotate-90 transition-transform duration-300" />
            ) : (
              <FiMenu className="text-3xl text-orange-500 transition-transform duration-300 hover:scale-110" />
            )}{" "}
          </button>{" "}
        </div>{" "}
      </nav>{" "}
      {/* Mobile Menu Overlay */}{" "}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}{" "}
      {/* Mobile Menu */}{" "}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        {" "}
        {/* Close Button */}{" "}
        <button
          className="absolute top-5 right-5 text-orange-500 hover:text-yellow-500 hover:scale-110 transition-transform duration-300"
          onClick={() => setIsOpen(false)}
        >
          {" "}
          <FiX className="text-3xl" />{" "}
        </button>{" "}
        {/* Menu Items */}{" "}
        <ul className="mt-16 space-y-6 text-left pl-6">
          {" "}
          {["About", "Process", "Menu", "Testimonials", "Contact"].map(
            (item) => (
              <li key={item}>
                {" "}
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block text-lg font-medium text-gray-800 hover:text-yellow-500 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {" "}
                  {item}{" "}
                </Link>{" "}
              </li>
            )
          )}{" "}
        </ul>{" "}
      </div>
    </>
  );
};

export default Navbar;
