import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../services/api';

// import { Container } from './styles';

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    }
  });

  return (
    <h1>Chart</h1>
  )
};

export default Chart;