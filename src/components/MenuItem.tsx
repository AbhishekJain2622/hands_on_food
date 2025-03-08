import React from "react";

interface MenuItemProps {
  name: string;
  price?: number | null;
  description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-orange-200">
      <h3 className="text-xl font-semibold text-orange-600">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        {price !== null ? (
          <span className="text-2xl font-bold text-orange-500">₹{price}/-</span>
        ) : (
          <span className="text-gray-500 italic">Price on request</span>
        )}
        <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
