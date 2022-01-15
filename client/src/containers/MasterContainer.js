import React, {useState, useEffect} from 'react';
import {getCurrentStocks} from '../services/ApiServices';
import SharedComponentContainer from './SharedComponentContainer';
import StockMarketContainer from './StockMarketContainer';



import fetchedData from '../components/stockMarketComponents/fetchedData';

const MasterContainer = () => {
    const [apiData, setApiData] = useState(fetchedData);

    useEffect(() => {
      // getCurrentStocks()
      // .then(data => console.log(JSON.stringify(data)))
      // .then(data => setApiData(data))
    },[])
  
    return (
    <>
      <h2>Master Container</h2>
      <SharedComponentContainer/>
      <StockMarketContainer stocks={apiData}/>
    </>
    );
}
 
export default MasterContainer;