import React from 'react';
import pic1 from '../../images/femaleSilhouette.png';
import pic2 from '../../images/maleSilhouette.png';
import './team.css';

const Team = () => {
	return (
		<div className="team shadow-5">
			<h2>Our Team</h2>
				<div className="Members">
					<div className="m shadow-5">
						<img alt="Brina Patino" src={pic1} />
						<h3>Brina Patino</h3>
						<h4>Executive Director</h4>
						<p>Magna dolor irure tempor consectetur adipisicing adipisicing aliqua dolore dolore ut qui tempor aute sed culpa adipisicing labore est.</p>
						<div className="email shadow-5 grow">Email</div>
					</div>
					<div className="m shadow-5">
						<img alt="Brina Patino" src={pic2} />
						<h3>Brina Patino</h3>
						<h4>Executive Director</h4>
						<p>Magna dolor irure tempor consectetur adipisicing adipisicing aliqua dolore dolore ut qui tempor aute sed culpa adipisicing labore est.</p>
						<div className="email shadow-5 grow">Email</div>
					</div>
				</div>
		</div>
	)
}

export default Team;