import React from "react";
import Mobile from "./Mobile";
const MobileList = ({ people }) => {
  if (people.length == 0) {
    return <h1>No details added</h1>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Mobile details</h2>
      <div className="mobile-center">
        {people.map((item) => {
          return <Mobile key={item.id} {...item}></Mobile>;
        })}
      </div>
    </section>
  );
};

export default MobileList;
