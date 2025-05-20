import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom App!!</h1>
    </div>
  );
}

// Correctly defined React element using createElement
const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit Google'
);

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MyApp />
    {reactElement}
  </>
);
