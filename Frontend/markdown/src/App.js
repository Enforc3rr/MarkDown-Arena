import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MakeMarkDown from './components/makeMarkDown';

export default function App() {
  return (
    <div>
      <main>
        <div className="container">
            <MakeMarkDown />
        </div>
      </main>
    </div>
  );
}
