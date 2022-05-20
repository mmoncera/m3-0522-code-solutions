import React from 'react';
import ReactDOM from 'react-dom/client';

const CustomButton = () => {
  return <button>Click Me!</button>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<CustomButton />);
