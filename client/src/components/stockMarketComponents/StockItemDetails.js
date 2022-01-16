import React, {useEffect, useState} from 'react';
// import {getStockItemDetails} from '../../services/ApiServices';
import {apikey} from '../../services/apikey';

const StockItemDetails = ({symbol}) => {

    const [stockDetails, setStockDetails] = useState(null);
    const [stockPrices, setStockPrices] = useState(null);


    useEffect(() => {
        // getStockItemDetails(symbol)
        const url1 = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apikey}`
        fetch(url1)
        .then(data => data.json())
        .then(data => setStockDetails(data[0]));

        const url2 = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?timeseries=2&apikey=${apikey}`
        fetch(url2)
        .then(data => data.json())
        .then(data => setStockPrices(data[0]));
    },[]);


    return (
        <h2>StockItemDetails</h2>
    );
};

export default StockItemDetails;