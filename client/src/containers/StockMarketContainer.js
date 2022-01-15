import React, {useState, useEffect} from 'react';
import StockMarketList from '../components/stockMarketComponents/StockMarketList';


const StockMarketContainer = ({stocks}) => {

    // const loadAllStocks = getCurrentStocks()

    return (
        <>
            <h1>StockMarketContainer</h1>
            <StockMarketList stocks={stocks}/>
        </>
    )
}

export default StockMarketContainer;
