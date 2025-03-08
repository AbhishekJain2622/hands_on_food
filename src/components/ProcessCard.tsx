import React from "react";

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="inline-block p-4 bg-[#EAAA00]/20 rounded-full text-[#EAAA00] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#EAAA00]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProcessCard;
