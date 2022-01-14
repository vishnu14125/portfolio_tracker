import React, {useState, useEffect} from 'react';
import {getCurrentStocks} from './services/ApiServices'

const MasterContainer = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      getCurrentStocks()
      .then(data => setApiData(data))
    },[])
  
    return (
    <>
      <h2>Master Container</h2>

      </>
    );
}
 
export default MasterContainer