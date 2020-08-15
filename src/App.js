import React from 'react';
import './App.css';
import Map from './components/map';
import KeyFeatures from './components/keyFeatures/'


function App() {
  const features = [
    'Help to Buy available, ideal for first time buyers',
    'Within walking distance of the DownTown Dallas',
    'Exposed brickwork retaining the charm of the existing building',
    'Cycle storage',
    '10 unique 1,2 and 3 bed apartments available'
  ];
  return (
    <div className="App">
    <KeyFeatures features={features} />
     <Map />
    </div>
  );
}

export default App;
