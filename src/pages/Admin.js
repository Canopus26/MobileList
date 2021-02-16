import React, { useState, useEffect } from "react";

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys
const getLocalStorage = () => {
  let list = localStorage.getItem("people");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("people")));
  } else {
    return [];
  }
};

const ControlledInputs = () => {
  //const [Name, setFirstName] = useState('');
  //const [Brand, setBrand] = useState('');
  const [person, setPerson] = useState({
    Name: "",
    Brand: "",
    Price: "",
    Color: "",
    RAM: "",
    ROM: "",
  });
  const [people, setPeople] = useState(getLocalStorage());
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.Name && person.Price && person.Brand) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({
        Name: "",
        Brand: "",
        Price: "",
        Color: "",
        RAM: "",
        ROM: "",
      });
    }
  };
  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
    console.log(people);
  }, [people]);
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          margin: "2rem",
        }}
      >
        Add mobile details here
      </h2>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="Name">Name : </label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={person.Name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Brand">Brand : </label>
            <input
              type="text"
              id="Brand"
              name="Brand"
              value={person.Brand}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Price">Price : </label>
            <input
              type="number"
              id="Price"
              name="Price"
              value={person.Price}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Color">Color : </label>
            <input
              type="text"
              id="Color"
              name="Color"
              value={person.Color}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="RAM">RAM : </label>
            <input
              type="text"
              id="RAM"
              name="RAM"
              value={person.RAM}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="ROM">ROM : </label>
            <input
              type="text"
              id="ROM"
              name="ROM"
              value={person.ROM}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            add mobile
          </button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
