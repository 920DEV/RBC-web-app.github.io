import React from 'react'
import './about.css'
import '../../App.css'
let image1 = require('../../Assets/word.webp')
let image2 = require('../../Assets/wordpress.png')
let image3 = require('../../Assets/excel.png')
let image4 = require('../../Assets/photoshop.png')

const About = () => {
  return (
    <>
      <main>
        <section className="About-Page">
          <div className ="about-section">
            <h1>About Us Page</h1>
            <p>Welcome to the Rbc web page application, for any query kindly prefer to the contact page </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo adipisci facere est eligendi corrupti debitis quidem pariatur ut animi unde at, in excepturi similique ducimus natus atque veniam minima recusandae?
            </p>
          </div>
          <h2 className="heading-section">Our Team</h2>
          <div className ="about-row">
            <div className ="about-column">
              <div className ="profile-card">
                <img src={image1} alt="" />
                <div className ="about-container">
                  <h2>Aryan Choudhary</h2>
                  <p className ="title">CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>jane@example.com</p>
                  <p>
                    <button className ="button">Contact</button>
                  </p>
                </div>
              </div>
            </div>
            <div className ="about-column">
              <div className ="profile-card">
                <img src={image1} alt="" />
                <div className ="about-container">
                  <h2>Aryan Choudhary</h2>
                  <p className ="title">CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>jane@example.com</p>
                  <p>
                    <button className ="button">Contact</button>
                  </p>
                </div>
              </div>
            </div>
            <div className ="about-column">
              <div className ="profile-card">
                <img src={image1} alt="" />
                <div className ="about-container">
                  <h2>Aryan Choudhary</h2>
                  <p className ="title">Developer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>jane@example.com</p>
                  <p>
                    <button className ="button">Contact</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )

  
}
export default About;
