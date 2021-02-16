import React from "react";

const Mobile = ({ id, Name, Brand, Price, Color, RAM, ROM }) => {
  return (
    <article className="mobile">
      <div className="mobile-footer">
        <h3>Name : {Name}</h3>
        <h3>Brand : {Brand}</h3>
        <h3>Price : {Price}</h3>
        <h3>Color : {Color}</h3>
        <h3>RAM : {RAM}</h3>
        <h3>ROM : {ROM}</h3>
      </div>
    </article>
  );
};

export default Mobile;
