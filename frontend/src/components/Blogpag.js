import React from 'react';
import '../index.css';

export default function About() {
  return (
    <div className="about-section">
    <div className="about">
    <h2 className='text-white'>OUR BLOG PAGE</h2>
        <h3 className='text-white mt-5'>
          Welcome to our online traveling system! BLOG PAGE 
        </h3>
</div>
      <h2 className= 'mt-5' style={{ textAlign: 'center',color:'white'}}>POSTS</h2>

      <div className="row ">
        <div className="column">
          <div className="card">
            {/* <img src={pic1} alt="Jane" style={{ width: '500px',height:"200px" }} /> */}
            <div className="container bg-primary">
              <h2>Jane Doe</h2>
              {/* <p className="title">CEO & Founder</p> */}
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              {/* <p><button className="button">Contact</button></p> */}
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            {/* <img src={pic1} alt="Mike"  style={{ width: '500px',height:"200px" }}/> */}
            <div className="container bg-primary">
              <h2>Mike Ross</h2>
              {/* <p className="title">Art Director</p> */}
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              {/* <p><button className="button">Contact</button></p> */}
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            {/* <img src={pic1} alt="John"  style={{ width: '500px',height:"200px" }} /> */}
            <div className="container bg-primary">
              <h2>John Doe</h2>
              {/* <p className="title">Designer</p> */}
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              {/* <p><button className="button">Contact</button></p> */}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            {/* <img src={pic1} alt="John"  style={{ width: '500px',height:"200px" }} /> */}
            <div className="container bg-primary">
              <h2>John Doe</h2>
              {/* <p className="title">Designer</p> */}
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              {/* <p><button className="button">Contact</button></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
