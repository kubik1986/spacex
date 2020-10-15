import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import './features.css';

const Images = {
  'Falcon 1': 'falcon-1',
  'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship',
  'other': 'somerocket'
}

const formater = new Intl.NumberFormat('en-EN');
const formatNumber = number => formater.format(number);

const Features = ({ rocketFeatures }) => {
	const name = rocketFeatures.hasOwnProperty('name') ? rocketFeatures.name : 'n/a';
	const heightMeter = rocketFeatures.hasOwnProperty('height') ? rocketFeatures.height.meters : 'n/a';
	const heightFeet = rocketFeatures.hasOwnProperty('height') ? rocketFeatures.height.feet : 'n/a';
	const diameterMeter = rocketFeatures.hasOwnProperty('diameter') ? rocketFeatures.diameter.meters : 'n/a';
	const diameterFeet = rocketFeatures.hasOwnProperty('diameter') ? rocketFeatures.diameter.feet : 'n/a';
	const massKg = rocketFeatures.hasOwnProperty('mass') ? formatNumber(rocketFeatures.mass.kg) : 'n/a';
	const massLb = rocketFeatures.hasOwnProperty('mass') ? formatNumber(rocketFeatures.mass.lb) : 'n/a';
	const payloadKg = rocketFeatures.hasOwnProperty('payload_weights') ? formatNumber(rocketFeatures.payload_weights.find(item => item.id === 'leo').kg) : 'n/a';
	const payloadLb = rocketFeatures.hasOwnProperty('payload_weights') ? formatNumber(rocketFeatures.payload_weights.find(item => item.id === 'leo').lb) : 'n/a';
	const description = rocketFeatures.hasOwnProperty('description') ? rocketFeatures.description : 'n/a';

	return (
		<section className="features">
			<h2 className="features-title">
				{name}<br/>Overview
			</h2>
			<div className="overview">
				<table className="table">
					<caption className="table-title">
						Size
					</caption>
					<thead>
						<tr>
							<td className="table-column">HEIGHT</td>
							<td className="table-column">{heightMeter} m / {heightFeet} ft</td>
						</tr>
						<tr>
							<td className="table-column">DIAMETER</td>
							<td className="table-column">{diameterMeter} m / {diameterFeet} ft</td>
						</tr>
						<tr>
							<td className="table-column">MASS</td>
							<td className="table-column">{massKg} kg / {massLb} lb</td>
						</tr>
						<tr>
							<td className="table-column">PAYLOAD TO LEO</td>
							<td className="table-column">{payloadKg} kg / {payloadLb} lb</td>
						</tr>
					</thead>
				</table>
				<RellaxWrapper speed={14}>
					<img
							src={`img/${Images.hasOwnProperty(name) ? Images[name] : Images['other']}.png`}
							alt="rocket"
							className="rocket"
					/>
				</RellaxWrapper>
				<article>
					<h3 className="features-subtitle">DESCRIPTION</h3>
					<p className="features-text">
						{description}
					</p>
				</article>
			</div>
		</section>
	);
}

export default Features;