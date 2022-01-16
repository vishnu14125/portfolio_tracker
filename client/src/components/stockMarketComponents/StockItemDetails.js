import React, {useEffect, useState} from 'react';
// import {getStockItemDetails} from '../../services/ApiServices';
import {apikey} from '../../services/apikey';
import {fetchedStockDetails, fetchedStockPrices} from './fetchedData.js';

const StockItemDetails = ({symbol}) => {

    const [stockDetails, setStockDetails] = useState(fetchedStockDetails);
    const [stockPrices, setStockPrices] = useState(fetchedStockPrices);

    // const [stockDetails, setStockDetails] = useState(null);
    // const [stockPrices, setStockPrices] = useState(null);

    useEffect(() => {
        // const url1 = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apikey}`
        // fetch(url1)
        // .then(data => data.json())
        // // data[0] - is an object
        // .then(data => setStockDetails(data[0]))

        // const url2 = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?timeseries=2&apikey=${apikey}`
        // fetch(url2)
        // .then(data => data.json())
        // // data.historical - an array of 2 objects
        // .then(data => setStockPrices(data.historical))
    },[]);


    return (
        <> 
        {stockDetails && stockPrices ? 
        <div>
            <br></br>
            <img src={stockDetails.image}></img>
            <h3><b>{stockDetails.companyName}</b></h3>
            <li><b>Symbol: </b>{stockDetails.symbol}</li>

            <li><b>Current share price: </b>$ {stockPrices[0].open + stockPrices[0].change}</li>

            {stockPrices[0].open + stockPrices[0].change >= stockPrices[0].open ?
                <li style={{color:'#00b300'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▲</li> :
                <li style={{color:'red'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▼ </li>}
            
            <li><b>Last dividend: </b>{stockDetails.lastDiv}</li>
            <li><b>Sector: </b>{stockDetails.sector}</li>
            <li><b>Industry: </b>{stockDetails.industry}</li>
            <li><b>Website: </b>{stockDetails.website}</li>
            <li><b>Description: </b>{stockDetails.description}</li>


            <li><b>Ceo: </b>{stockDetails.ceo}</li>
            <li><b>Country: </b>{stockDetails.country}</li>
            <li><b>Currency: </b>{stockDetails.currency}</li>
            <br></br>
        </div>
        : null}
        </>
    );
};

export default StockItemDetails;