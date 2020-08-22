import React from 'react';
import InstagramLoader from './components/InstagramLoader';
import GridLayoutLoader from './components/GridLayoutLoader';
import FacebookLoader from './components/FacebookLoader';
import './App.css';

function App() {
  return (
    <div className="App">
      <GridLayoutLoader />
      <InstagramLoader />
      <FacebookLoader />
    </div>
  );
}

export default App;
