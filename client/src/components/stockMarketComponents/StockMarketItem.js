import React from "react";

const StockMarketItem = ({stock}) => {
    return (
        <div>
            <li><b>Symbol:</b>{stock.symbol}</li>
            <li><b>Company name:</b>{stock.companyName}</li>
            {stock.price}
            {stock.industry}
            {stock.country}
        </div>
    )
};

export default StockMarketItem;
