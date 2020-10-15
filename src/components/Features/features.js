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

const Features = ({ name, height, diameter, mass, payload_weights: payloadWeights, description  }) => (
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
						<td className="table-column">{height.meters} m / {height.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">{formatNumber(mass.kg)} kg / {formatNumber(mass.lb)} lb</td>
					</tr>
					{payloadWeights.map(item => (
						<tr key={item.id}>
							<td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
							<td className="table-column">{formatNumber(item.kg)} kg / {formatNumber(item.lb)} lb</td>
						</tr> 
					))}
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

export default Features;