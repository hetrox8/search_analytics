import React from 'react';

const AnalyticsDisplay = ({ analytics }) => {
  return (
    <div>
      <h3>Search Trends</h3>
      <ul>
        {Object.entries(analytics).map(([query, count], index) => (
          <li key={index}>{query}: {count}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsDisplay;
