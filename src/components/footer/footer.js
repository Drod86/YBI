import React from 'react';
import Social from '../social/social';
import './footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<ul>
				<li><h3>What We Are Doing</h3></li>
				<li>Supporting Young Entreprenuers</li>
				<li>Advocating for our Community</li>
				<li>Fundraising for the Cause</li>
			</ul>
			<ul>
				<li><h3>Get Involved</h3></li>
				<li>Volunteer</li>
				<li>Host Events</li>
				<li>Donate</li>
			</ul>
			<ul>
				<li><h3>About</h3></li>
				<li>Contact Us</li>
				<li>FAQs</li>
				<li>Organization</li>
				<li>Privacy Policy</li>
			</ul>
			<div className="social">
				<p className='logo grow'>YBI</p>
				<Social />
			</div>
		</div>
	)
}

export default Footer;