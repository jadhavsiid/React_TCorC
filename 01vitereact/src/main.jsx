import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import {jsx as _jsx} from 'react/jsx-runtime';

function MyApp() {
  return (
    <div>
      <h1>Custom App!!</h1>
    </div>
  );
}

const anotherUser = 'jadhavsiid'

// Correctly defined React element using createElement
const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit Google',
  anotherUser
);

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MyApp />
    {reactElement}
  </>
);
