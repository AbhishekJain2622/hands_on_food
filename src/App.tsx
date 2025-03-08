import React from 'react';
import { ChefHat, Clock, Package, Truck, MapPin, Mail, Phone } from 'lucide-react';
import ProcessCard from './components/ProcessCard';
import TestimonialCarousel from './components/TestimonialCarousel';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  const processes = [
    { icon: <ChefHat size={32} />, title: "Fresh Ingredients", description: "We source the finest ingredients daily" },
    { icon: <Package size={32} />, title: "Quality Packaging", description: "Sealed for freshness and safety" },
    { icon: <Clock size={32} />, title: "Quick Preparation", description: "Ready in minutes, perfect every time" },
    { icon: <Truck size={32} />, title: "Fast Delivery", description: "Right to your doorstep" }
  ];


  
  
  return (
    <div className="min-h-screen bg-white">
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
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hands on Food
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Premium Cloud Kitchen & Gourmet Premixes
            </p>
            <button   className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors">
              Explore Our Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800" 
                alt="Kitchen"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Hands on Food, we believe in making gourmet cooking accessible to everyone. 
                Our cloud kitchen delivers restaurant-quality meals, while our premium premixes 
                bring professional flavors to your home kitchen. With years of culinary expertise 
                and a passion for quality, we're revolutionizing how people experience food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <ProcessCard key={index} {...process} />
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="text-orange-500" />
                  <p>123 Foodie Street, Culinary District, 12345</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-orange-500" />
                  <p>hello@handsonfood.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-orange-500" />
                  <p>+1 (234) 567-8900</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
        
        {/* Full-width Map */}
        <div className="h-[500px] w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596834!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645868744240!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;