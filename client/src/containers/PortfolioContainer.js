import React, {useState, useEffect} from 'react';
import {apikey} from './services/apikey';

const PortfolioContainer = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        // fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2022-01-13/2022-01-14?apiKey=${apikey}`)
        fetch(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NYSE,NASDAQ&apikey=${apikey2}`)
        .then(res => res.json())
        .then(data => setApiData)
    },[])

    return (
        <h1>PortfolioContainer</h1>
    )
};