import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    content: "The premixes from Hands on Food have transformed my home cooking. Restaurant quality meals in minutes!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
  },
  {
    name: "Michael Chen",
    role: "Home Chef",
    content: "Their cloud kitchen delivers consistently amazing food. The biryani is out of this world!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
  },
  {
    name: "Priya Patel",
    role: "Food Blogger",
    content: "The attention to detail in their spice blends is remarkable. Each dish is perfectly balanced.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col items-center text-center">
          <img 
            src={testimonials[currentIndex].image} 
            alt={testimonials[currentIndex].name}
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <div className="flex gap-1 mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} size={20} className="fill-orange-500 text-orange-500" />
            ))}
          </div>
          <p className="text-lg text-gray-700 mb-6">"{testimonials[currentIndex].content}"</p>
          <h4 className="text-xl font-semibold">{testimonials[currentIndex].name}</h4>
          <p className="text-gray-500">{testimonials[currentIndex].role}</p>
        </div>
      </div>

      <button 
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default TestimonialCarousel;