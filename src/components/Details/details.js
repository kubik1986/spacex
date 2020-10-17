import React, { useState, useEffect } from 'react';
import  { useHistory } from 'react-router-dom';
import Youtube from 'react-youtube';
import Main from '../Main/main';
import useLaunches from '../useLaunches/useLaunches';
import './details.css';

const Details = (props) => {
	const history = useHistory();

	const { getLaunch } = useLaunches();	
	const [ launch, setLaunch ] = useState(null);

	useEffect(() => {
		setLaunch(getLaunch(props.match.params.id));
	}, [getLaunch, props.match.params.id]);


	if (!launch) return null;

	return (
		<>
			<Main title={launch.name} />
			<section className="details">
				<div className="container">
					<div className="details-row">
						<div className="details-image">
							<img src={launch.links.patch.small} alt={launch.name}/>
						</div>
						<div className="details-content">
							<p className="details-description">{launch?.details}</p>
						</div>
					</div>
					<Youtube 
						className="details-youtube"
						videoId={launch.links.youtube_id}
						opts={{
							width: '560',
							height: '315',
						}}
					/>
				</div>
				<a onClick={history.goBack} className="button button-back">go back</a>
			</section>
		</>
	);
}

export default Details;