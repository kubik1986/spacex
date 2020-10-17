import { useState, useEffect } from 'react';
import FetchData from '../../service/FetchData';

const fetchData = new FetchData();

const useLaunches = () => {
  const  [ launches, setLaunches ] = useState([]);

	useEffect(() => {
		fetchData.getLaunches()
			.then(launches => setLaunches(launches.reverse()));
  }, []);

  const getLaunch = id => launches.find(item => item.id === id);

  return { launches, getLaunch };
}

export default useLaunches;
