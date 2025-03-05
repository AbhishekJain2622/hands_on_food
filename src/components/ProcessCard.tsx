import React from 'react';

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="inline-block p-4 bg-orange-100 rounded-full text-orange-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProcessCard;