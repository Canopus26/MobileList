import React, { useState, useEffect } from "react";
import MobileList from "../components/MobileList";

const getLocalStorage = () => {
  let list = localStorage.getItem("people");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("people")));
  } else {
    return [];
  }
};
const List = () => {
  const list = getLocalStorage();
  let allCategories = ["all", ...new Set(list.map((item) => item.Brand))];
  useEffect(() => {
    allCategories = ["all", ...new Set(list.map((item) => item.Brand))];
    console.log(allCategories);
  }, [list]);
  const [brand, setBrand] = useState("all");
  const [price, setPrice] = useState("all");
  const [people, setPeople] = useState(getLocalStorage());
  //const [brand, setBrand] = useState("All");
  const handleChange = (e) => {
    if (e.target.value === "all") {
      if (price === "all") {
        setPeople(list);
        setBrand(e.target.value);
        return;
      } else {
        if (parseInt(price)) {
          const beg_price = parseInt(price);
          const end_price = parseInt(price) + 9999;
          setPeople(
            list.filter(
              (item) => item.Price >= beg_price && item.Price <= end_price
            )
          );
        } else {
          setPeople(list.filter((item) => item.Price > 50000));
        }
      }
    } else {
      if (price === "all") {
        setPeople(list.filter((item) => item.Brand === e.target.value));
      } else {
        if (parseInt(price)) {
          const beg_price = parseInt(price);
          const end_price = parseInt(price) + 9999;
          setPeople(
            list.filter(
              (item) =>
                item.Brand === e.target.value &&
                item.Price >= beg_price &&
                item.Price <= end_price
            )
          );
        } else {
          setPeople(
            list.filter(
              (item) => item.Brand === e.target.value && item.Price > 50000
            )
          );
        }
      }
    }
    setBrand(e.target.value);
  };
  console.log(brand);
  const handlePrice = (e) => {
    if (e.target.value === "all") {
      if (brand === "all") {
        setPeople(list);
        setPrice(e.target.value);
        return;
      } else {
        setPeople(list.filter((item) => item.Brand === brand));
      }
    } else {
      if (brand === "all") {
        if (parseInt(e.target.value)) {
          const beg_price = parseInt(e.target.value);
          const end_price = parseInt(e.target.value) + 9999;
          setPeople(
            list.filter(
              (item) => item.Price >= beg_price && item.Price <= end_price
            )
          );
        } else {
          setPeople(list.filter((item) => item.Price > 50000));
        }
      } else {
        if (parseInt(e.target.value)) {
          const beg_price = parseInt(e.target.value);
          const end_price = parseInt(e.target.value) + 9999;
          setPeople(
            list.filter(
              (item) =>
                item.Brand === brand &&
                item.Price >= beg_price &&
                item.Price <= end_price
            )
          );
        } else {
          setPeople(
            list.filter((item) => item.Brand === brand && item.Price > 50000)
          );
        }
      }
    }
    setPrice(e.target.value);
  };
  console.log(price);
  return (
    <main>
      <div className="container">
        <label htmlFor="brand" className="label">
          brand
        </label>
        <select id="brand" onChange={handleChange} className="btn">
          {allCategories.map((item, index) => {
            return (
              <option key={index} label={item}>
                {item}
              </option>
            );
          })}
        </select>
        <label htmlFor="price-range" className="label">
          Price-range
        </label>
        <select id="price-range" onChange={handlePrice} className="btn">
          <option label="all">all</option>
          <option label="1-10000">1-10000</option>
          <option label="10001-20000">10001-20000</option>
          <option label="20001-30000">20001-30000</option>
          <option label="30001-40000">30001-40000</option>
          <option label="40001-50000">40001-50000</option>
          <option label="more than 50000">more than 50000</option>
        </select>
        <MobileList people={people} />
      </div>
    </main>
  );
};

export default List;
