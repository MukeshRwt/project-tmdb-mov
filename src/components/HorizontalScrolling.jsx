import React from "react";
import Card from "./Card";

const HorizontalScrolling = ({ data=[], heading,trending }) => {
  return (
    <div>
      <h1 className="container text-xl md:text-2xl font-bold text-gray-900">{heading}</h1>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container flex gap-5">
          {data.map((data, index) => (
            <Card key={data.id} data={data} index={index} trending={trending} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrolling;
