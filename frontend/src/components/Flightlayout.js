import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import background from "../images/flight1.jpg";
import "../index.css";

const Flightlayout = () => {
  const [credentials, setCredentials] = useState({
    to: "",
    from: "",
    class: "",
    departure: "",
    return: "",
    adults: "",
    childrens: "",
  });
  // const fun = (e) => {
  //   console.log(e.target.value);
  // };

  const functionHandle = async (e) => {
    console.log(credentials);
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/addflight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        to: credentials.to,
        from: credentials.from,
        class: credentials.class,
        departure: credentials.departure,
        return: credentials.return,
        adults: credentials.adults,
        childrens: credentials.childrens,
      }),
    });

    // You can handle the response here
    const json = await response.json();
    console.log(json);
  };

  const searchflight = async(e) =>
  {
    // console.log("Entered into the search flight");
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/searchflight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        to: credentials.to,
        from: credentials.from,
        class: credentials.class,
        departure: credentials.departure,
        return: credentials.return,
        adults: credentials.adults,
        childrens: credentials.childrens,
      }),
    });

    const json = await response.json();

  if (json.success) { // Check the 'success' property
    alert("Success! Flight Available, Now you can register and Add Flight");
  } else {
    alert("Flight Not Found");
  }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        width: "100%",
        height: " 450px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "3px solid black",
      }}
    >
      <div className="buttonflight">
        <NavLink to="/">
          <button activeClassName="active" className="btn btn-primary .active fs-4">FLIGHTS</button>
        </NavLink>
        <NavLink to="/hotel">
          <button activeClassName="active" className="btn btn-primary .active fs-4">HOTELS</button>
        </NavLink>
        <NavLink to="/carhire">
          <button activeClassName="active" className="btn btn-primary  fs-4">CAR HIRE</button>
        </NavLink>
      </div>
      <div className="flightlayout ">
        <form onSubmit={functionHandle} className="row g-3 container">
          <label
            htmlFor="from"
            className="form-label col-md-3 text-white mx-5 my-5"
          >
            From:
            <select
              className="form-select bg-white text-black"
              name="from"
              onChange={handleInputChange}
            >
              <option>Select from Below....</option>
              <option>Pakistan</option>
              <option>America</option>
              <option>Dubai</option>
              <option>Canada</option>
            </select>
          </label>
          <label
            htmlFor="to"
            className="form-label col-md-3 text-white mx-5 my-5"
          >
            To:
            <select
              className="form-select bg-white text-black"
              name="to"
              onChange={handleInputChange}
            >
              <option>Select from Below....</option>
              <option>America</option>
              <option>Pakistan</option>
              <option>Dubai</option>
              <option>Canada</option>
            </select>
          </label>
          <label
            htmlFor="class"
            className="form-label col-md-3 text-white mx-5 my-5"
          >
            Classes:
            <select
              className="form-select bg-white text-black"
              name="class"
              onChange={handleInputChange}
            >
              <option>Select from Below....</option>
              <option>Economy</option>
              <option>Bussiness</option>
            </select>
          </label>
          <div className="col-md-3 ">
            <label htmlFor="departure" className="form-label text-white ">
              Departure:
            </label>
            <input
              type="text"
              className="form-control bg-white text-black"
              id="departure"
              name="departure"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3 ">
            <label htmlFor="return" className="form-label text-white ">
              Return:
            </label>
            <input
              type="text"
              className="form-control bg-white text-black"
              id="return"
              name="return"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-outline col-md-3 ">
            <label htmlFor="adults" className="form-label">
              ADULT (16+)
            </label>
            <input
              min="0"
              max="20"
              type="number"
              id="adults"
              className="form-control bg-white text-black"
              name="adults"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-outline col-md-3">
            <label htmlFor="childrens" className="form-label">
              CHILDREN
            </label>
            <input
              min="0"
              max="20"
              type="number"
              id="childrens"
              className="form-control bg-white text-black"
              name="childrens"
              onChange={handleInputChange}
            />
          </div>
          {
            (localStorage.getItem("authToken")) ? 
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
  :
  <div className='btn btn-primary ' onClick={searchflight}>Search</div>
          }
         
        </form>
      </div>
    </div>
  );
};

export default Flightlayout;
