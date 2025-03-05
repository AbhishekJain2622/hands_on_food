import React from 'react';

interface MenuItemProps {
  name: string;
  price: number;
  description: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">₹{price}</span>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;