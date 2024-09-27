import React from "react";

const Section: React.FC<{
  title: string;
  items: { name: string; image: string }[];
}> = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full rounded-lg shadow-lg"
            />
            <p className="mt-2 text-gray-300">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
