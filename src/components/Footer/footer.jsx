import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom'
const  footer=()=> {
  return (
    <>
    <footer className ="footer">
  	 <div className ="container">
  	 	<div className ="footer-row">
  	 		<div className ="footer-col">
  	 			<h4>RBC</h4>
  	 			<ul>
  	 				<li><Link to="#">about us</Link></li>
  	 				<li><Link to="#">our services</Link></li>
  	 				<li><Link to="#">privacy policy</Link></li> 
  	 			</ul>
  	 		</div>
  	 		<div className ="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><Link to="#">FAQ</Link></li>
  	 				<li><Link to="#">Contact Us</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className ="footer-col">
  	 			<h4>Centers</h4>
  	 			<ul>
  	 				<li><Link to="#">Bihar</Link></li>
  	 				<li><Link to="#">Lucknow</Link></li>
  	 				<li><Link to="#">New Delhi</Link></li>
  	 				<li><Link to="#">Banglore</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className ="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className ="social-links">
  	 				<Link to="#"><i className ="fab fa-facebook-f"></i></Link>
  	 				<Link to="#"><i className ="fab fa-twitter"></i></Link>
  	 				<Link to="#"><i className ="fab fa-instagram"></i></Link>
  	 				<Link to="#"><i className ="fab fa-linkedin-in"></i></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </>
  )
}

export default footer;