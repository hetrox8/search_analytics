import React, { useState, useEffect } from 'react';
import { createConsumer } from '@rails/actioncable';

const SearchBox = ({ userId }) => {
  const [query, setQuery] = useState('');
  const [analytics, setAnalytics] = useState([]);
  const cable = createConsumer('ws://localhost:3000/cable');
  let timer = null;

  useEffect(() => {
    const subscription = cable.subscriptions.create({ channel: 'SearchChannel', user_id: userId }, {
      received(data) {
        setAnalytics(data);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [userId]);

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      const completed = newQuery.length > 0 && (newQuery.endsWith(' ') || newQuery.endsWith('?') || newQuery.endsWith('.'));
      subscription.send({ query: newQuery, ip_address: 'USER_IP', completed });
    }, 300);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      <AnalyticsDisplay analytics={analytics} />
    </div>
  );
};

export default SearchBox;
