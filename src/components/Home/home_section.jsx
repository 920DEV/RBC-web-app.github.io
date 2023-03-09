import React from 'react'
import './home-section.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// importing images
let image1 = require('../../Assets/word.webp')
let image2 = require('../../Assets/wordpress.png')
let image3 = require('../../Assets/excel.png')
let image4 = require('../../Assets/photoshop.png')

const home_section = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items:3 ,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <>
    <section className="cources-container2">
      <h1 className="scnd-heading">Our Popular Cources</h1>
      <div className="popular-cources">
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          <div className="cards-image">
            <img src={image1} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
          <div className="cards-image">
            <img src={image2} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
          <div className="cards-image">
            <img src={image3} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
          <div className="cards-image">
            <img src={image4} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
          <div className="cards-image">
            <img src={image1} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
          <div className="cards-image">
            <img src={image1} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
        </Carousel>
      </div>
    </section>
    <hr />
    <section className="cources-container2">
    <h1 className="scnd-heading" style={{margin:"20px"}}>Academics Cources</h1>
      <div className="popular-cources">
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          <div className="cards-image">
            <img src={image1} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
          <div className="cards-image">
            <img src={image1} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
          <div className="cards-image">
            <img src={image1} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
          <div className="cards-image">
            <img src={image1} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
          <div className="cards-image">
            <img src={image1} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
          <div className="cards-image">
            <img src={image1} alt="" />
            <span className= "cource-info">
              <h3>M.S.Word</h3>
              <p>This is the info text of above cource</p>
              <div className="Enroll-btn">
                <button>Enroll</button>
              </div>
            </span>
          </div>
        </Carousel>
      </div>
    </section>
    </>
  )
}
export default home_section
