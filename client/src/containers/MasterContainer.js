import React, {useState, useEffect} from 'react';
import {getCurrentStocks} from '../services/ApiServices';
import SharedComponentContainer from './SharedComponentContainer';
import StockMarketContainer from './StockMarketContainer';

const MasterContainer = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      getCurrentStocks()
      .then(data => setApiData(data))
    },[])
  
    return (
    <>
      <h2>Master Container</h2>
      <SharedComponentContainer/>
      <StockMarketContainer/>
    </>
    );
}
 
export default MasterContainer;