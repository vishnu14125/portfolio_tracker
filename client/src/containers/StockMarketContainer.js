import React, {useState, useEffect} from 'react';
import StockMarketList from '../components/stockMarketComponents/StockMarketList';
import StockMarketSearch from '../components/stockMarketComponents/StockMarketSearch';
import StockItemDetails from '../components/stockMarketComponents/StockItemDetails';
import FavouriteStock from '../components/stockMarketComponents/FavouriteStock';
import {Row, Col} from "react-bootstrap";
import './StockMarketContainer.css'


const StockMarketContainer = ({stocks, handleHistPrices, historicalPrices}) => {

    const [searchedStockSymbol, setSearchedStockSymbol] = useState(null);
    const [stockFavourites, setStockFavourites] = useState([]);


    const handleSearchedStock = (stockName) => {
        // Change the state with event.target.value after enter
        setSearchedStockSymbol(stockName)
    };

    const addToFavourites = (favourite) => {
        setStockFavourites([favourite, ...stockFavourites]);
    };

    const displayFavourites = stockFavourites.map((favourite, index) => {
        return <FavouriteStock favourite={favourite} key={index}/>})

    return (
        <>
            <div className='stockmarket-container'>
                <Row>
                    <Col>
                        <StockMarketSearch stocks={stocks} handleSearchedStock={handleSearchedStock}/>
                    </Col>
                </Row>
                <Row>
                    {searchedStockSymbol ? <Col><StockItemDetails symbol={searchedStockSymbol} handleHistPrices={handleHistPrices} historicalPrices={historicalPrices} addToFavourites={addToFavourites}/></Col> : null}
                </Row>

                {displayFavourites}

                <Row>
                    <Col>
                        <StockMarketList stocks={stocks}/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default StockMarketContainer;
