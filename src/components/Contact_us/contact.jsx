import React from 'react'
import './contact.css'
const Contact = () => {

  return (
    <>
      <section className ="contact-section">
        <div className ="contact-container">
          <div className ="contact-content">
            <aside className ="left-side">
              <div className ="address details">
                <i className ="fas fa-map-marker-alt"></i>
                <div className ="location">Address</div>
                <div className ="text-one">Madhepur</div>
                <div className ="text-two">Madhubani, Bihar</div>
              </div>
              <div className ="phone details">
                <i className ="fas fa-phone-alt"></i>
                <div className ="topic">Phone</div>
                <div className ="text-one">+91 00 00000</div>
                <div className ="text-two">+91 00 00000</div>
              </div>
              <div className ="email details">
                <i className ="fas fa-envelope"></i>
                <div className ="topic">Email</div>
                <div className ="text-one">xyz@gmail.com</div>
                <div className ="text-two">abc@gmail.com</div>
              </div>
            </aside>
            <div className ="right-side">
              <div className ="topic-text">Send us a message</div>
              <p>
                Kindly <strong>Contact Us</strong> for any type of queries.
              </p>
              <p>
                <b style={{ color: 'red' }}>Note:</b> Fields With{' '}
                <b style={{ color: 'red' }}>*</b> are mandatory
              </p>
              <form action="https://formspree.io/f/mgebzvln" className= "contact-form" method= "POST">
                <div className ="input-box">
                  <input name= "User Name" type="text" placeholder="First name*" />
                </div>
                <div className ="input-box">
                  <input type="text" name = " User Last Name" placeholder="Last name" />
                </div>
                <div className ="input-box">
                  <input type="text" name = "Email" placeholder="Enter your email*" />
                </div>
                <div className ="input-box message-box">
                  <textarea name="Message" cols="30" rows="10" placeholder= "Description*"></textarea>
                </div>
                <div className ="submit-button">
                  <input type="submit" value="send" />
                </div>
              </form>
            </div>
          </div>
          <div className="map-location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14322.593536629922!2d86.37134082924186!3d26.175578435207584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee708e501fe021%3A0xb6b555b7956787ec!2sMadhepur%2C%20Bihar%20847408!5e0!3m2!1sen!2sin!4v1678394109566!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" target = "_blank"></iframe>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
