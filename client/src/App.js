import './App.css';
import React, {useState, useEffect} from 'react';
import {apikey2} from './services/apikey';
import {getCurrentStocks} from './services/ApiServices'

function App() {

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getCurrentStocks()
    .then(data => setApiData(data))
  },[])

  return (
    <h1>Stock App</h1>
  );
}

export default App;
