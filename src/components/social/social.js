import React from 'react';
import './social.css';
import fb from '../../images/fbicon.png';
import twt from '../../images/twticon.png';
import ig from '../../images/igicon.png';

const Social = () => {
	return (
		<div className='soc'>
		    <a href=""><p className="grow shadow-4"><img src={fb} /></p></a>
		    <a href=""><p className="grow shadow-4"><img src={twt} /></p></a>
		    <a href=""><p className="grow shadow-4 ig"><img src={ig} /></p></a>
		</div>
	);
}

export default Social;