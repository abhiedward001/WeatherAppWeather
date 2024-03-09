import React from 'react'
import reactDOM from 'react-dom/client';
import Test from './Components/Test';

export function App() {
  return (
    <div>
        <Test></Test>
    </div>
  )
}

const root = reactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);

