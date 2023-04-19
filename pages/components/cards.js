import React from "react";
import Card from "./card";

const Cards = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="row">
      {arr.map((item) => {
        return (
          <div key={item} className="col-md-6">
            <Card />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
