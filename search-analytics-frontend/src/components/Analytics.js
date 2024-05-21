// src/components/Analytics.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const Analytics = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    axios.get('http://localhost:3000/search_queries')
      .then(response => {
        const labels = Object.keys(response.data);
        const counts = Object.values(response.data);
        setData({
          labels,
          datasets: [
            {
              label: '# of Searches',
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        });
      })
      .catch(error => console.error('Error fetching search analytics:', error));
  }, []);

  return (
    <div>
      <h2>Search Analytics</h2>
      <Bar data={data} />
    </div>
  );
};

export default Analytics;
