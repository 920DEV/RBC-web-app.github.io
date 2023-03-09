import React from 'react'
// importing the css(styling page) of home section.

import './home.css'
// importing the other home-page section
import Home_Sec from './home_section.jsx';
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.jsx'
let image1 = require('../../Assets/word.webp')
let image2 = require('../../Assets/wordpress.png')
let image3 = require('../../Assets/excel.png')
let image4 = require('../../Assets/photoshop.png')
const Home = () => {
  return (
    <>
      {/* Front Page  */}
      <main className="home-page">
        <section className="main-page">
          <h1 id="heading">rbc group</h1>
          <p>India's No 1 Computer Insitute</p>

          <div className="btn">
            <button id="btn1">
              <Link to="/" className="more-btn">
                Register <span id="arrow1">&rarr;</span>
              </Link>
            </button>

            <button id="btn2">
              <Link to="#" className="more-btn">
                Learn more <span id="arrow2">&rarr;</span>
              </Link>
            </button>
          </div>
        </section>
        {/* Cources section  */}
        <section className="cources-section" id="cources">
          <div className="cource-heading">
            <div className="cources-types">
              <h1>India’s Best Teachers for Tuitions</h1>
              <div className="para_info">
                <ul>
                  <p id="info1">
                    <Link className="class-option">
                      Online School for Every Student
                    </Link>
                  </p>
                  <p id="info2">
                    <Link className="class-option">
                      Online Tuitions for Class 5 to 12
                    </Link>
                  </p>
                  <p id="info3">
                    <Link className="class-option">All Subjects & Boards</Link>
                  </p>
                </ul>
              </div>
              <p id="para4">
                <Link className="link">IIT-JEE Preparation</Link>|{' '}
                <Link className="link">NEET Preparation</Link>|{' '}
                <Link className="link">Coding Classes</Link> |{' '}
                <Link className="link">Language Classes</Link> |
                <Link className="link">Bank Exam Preparation</Link> |
                <Link className="link">
                  Online Classes for College Students
                </Link>
              </p>
            </div>
          </div>

          <div className="cource-container">
            <div id="enhance-cources">
              <h1>Skill Enhancement Cources </h1>
            </div>
            <div className="cource-cards">
              <div className="cource-image">
                <img src={image1} alt="" />
                <span>
                  <h3>M.S.Word</h3>
                  <p>
                    This is the info text of above cource
                  </p>
                  <div className="Enroll-btn">
                    <button>Enroll</button>
                  </div>
                </span>
              </div>
              <div className="cource-image">
                <img  src={image2} alt="" />
                <span>
                  <h3>Wordpress </h3>
                  <p>This is the info text of above courcelo out</p>
                  <div className="Enroll-btn">
                    <button>Enroll</button>
                  </div>
                </span>
              </div>
              <div className="cource-image">
                <img id="admission-card" src={image3} alt="" />
                <span>
                  <h3>MS.Excel</h3>
                  <p>This is the info text of above cource</p>
                  <div className="Enroll-btn">
                    <button>Enroll</button>
                  </div>
                </span>
              </div>
              <div className="cource-image">
                <img id="admission-card" src={image4} alt="" />
                <span>
                  <h3>Adobe Photoshop</h3>
                  <p> This is the info text of above cource</p>
                  <div className="Enroll-btn">
                    <button>Enroll</button>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <Home_Sec>
          
        </Home_Sec>
      </main>
    </>
  )
}
export default Home
