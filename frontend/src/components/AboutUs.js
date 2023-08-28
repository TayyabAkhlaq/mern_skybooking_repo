import React from 'react';
import '../index.css';
import pic1 from '../images/flight.jpg';

export default function About() {
  return (
    <div className="about-section">
    <div className="about">
    <h2 className='text-white'>About US</h2>
        <h3 className='text-white'>
          Welcome to our online traveling system! 
        </h3>
</div>
      <h2 style={{ textAlign: 'center',color:'white' }}>Our Team</h2>

      <div className="row ">
        <div className="column">
          <div className="card">
            <img src={pic1} alt="Jane" style={{ width: '500px',height:"200px" }} />
            <div className="container bg-primary">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={pic1} alt="Jane" style={{ width: '500px',height:"200px" }} />
            <div className="container bg-primary">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={pic1} alt="Jane" style={{ width: '500px',height:"200px" }} />
            <div className="container bg-primary">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
