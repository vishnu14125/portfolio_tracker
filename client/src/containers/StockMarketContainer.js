import React, {useState, useEffect} from 'react';
import {getCurrentStocks} from '../services/ApiServices';
import StockMarketList from '../components/stockMarketComponents/StockMarketList';

const StockMarketContainer = ({getCurrentStocks, stocks}) => {

    // const loadAllStocks = getCurrentStocks()

    return (
        <>
            <h1>StockMarketContainer</h1>
            <StockMarketList stocks={stocks}/>
        </>
    )
}

export default StockMarketContainer;