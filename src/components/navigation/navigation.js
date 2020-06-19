import React from 'react';
import './navigation.css';

const Navigation = () => {
	return (
		<div className='nav'>
		    <p className="grow shadow-4">Mission</p>
		    <p className="grow shadow-4">Team</p>
		    <p className="grow fill shadow-4">Donate</p>
		    {/*<p className="grow">Sign Up</p>*/}
		</div>
	);
}

export default Navigation;