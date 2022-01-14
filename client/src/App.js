import './App.css';
import React, {useState, useEffect} from 'react';
import {apikey2} from './services/apikey';

function App() {



  const [apiData, setApiData] = useState([]);

  useEffect(() => {
      // fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2022-01-13/2022-01-14?apiKey=${apikey}`)
      fetch(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NYSE,NASDAQ&apikey=${apikey2}`)
      .then(res => res.json())
      .then(data => setApiData(data))
  },[])



  return (
    <h1>Stock App</h1>
  );
}

export default App;
