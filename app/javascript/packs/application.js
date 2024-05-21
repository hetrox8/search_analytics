// app/javascript/packs/application.js
import "@hotwired/turbo-rails";
import "controllers";
import "channels";
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from '../components/SearchBox';

document.addEventListener('DOMContentLoaded', () => {
  const userId = 1; // Replace with dynamic user ID if needed
  ReactDOM.render(
    <SearchBox userId={userId} />,
    document.getElementById('react-root') // Ensure this matches the div ID in your HTML
  );
});
