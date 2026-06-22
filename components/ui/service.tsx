import React from "react";

const Service = ({
  title,
  excrept,
  description,
}: {
  title: string;
  excrept: string;
  description: string;
}) => {
  return (
    <div className="bg-card border rounded-xl p-4 flex flex-col min-h-50">
      <h3 className="font-bold text-xl">{title}</h3>
      <span className="text-gray-400 text-sm mt-2 mb-4">{excrept}</span>
      <p className=" text-base tracking-wide">{description}</p>
    </div>
  );
};

export default Service;
