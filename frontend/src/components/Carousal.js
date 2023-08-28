import React from "react";
// import pic from '../images/flight2.jpg'

export default function Carousal() {
  return (
    <div>
      <style>
        {`
          #carouselExampleFade {
            
            background-color: white;
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
        style={{ height: "320px" }} // Adjust the carousel height as needed
      >
        <div className="carousel-inner" id="carosal">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/300x300/?airlines"
              className="d-block mx-auto"
              alt="..."
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius:"15px"
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300x300/?airline"
              className="d-block mx-auto"
              alt="..."
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius:"15px"
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300x300/?airoplane"
              className="d-block mx-auto"
              alt="..."
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius:"15px"
              }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon text-black"
            aria-hidden="true" 
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
