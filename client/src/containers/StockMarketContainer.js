import React, {useState, useEffect} from 'react';
import StockMarketList from '../components/stockMarketComponents/StockMarketList';
import StockMarketSearch from '../components/stockMarketComponents/StockMarketSearch';
import StockItemDetails from '../components/stockMarketComponents/StockItemDetails';

const StockMarketContainer = ({stocks}) => {

    const [searchedStockSymbol, setSearchedStockSymbol] = useState(null);

    const handleSearchedStock = (stockName) => {
        // Change the state with event.target.value after enter
        setSearchedStockSymbol(stockName)
    };

    return (
        <>
            <h1>StockMarketContainer</h1>
            <StockMarketSearch stocks={stocks} handleSearchedStock={handleSearchedStock}/>
            {searchedStockSymbol ? <StockItemDetails symbol={searchedStockSymbol}/> : null}
            <StockMarketList stocks={stocks}/>
        </>
    )
}

export default StockMarketContainer;
