import StockMarketItem from './StockMarketItem';


const StockMarketList = ({stocks}) => {

    const stockItems = stocks.map((stock, index) => {
        return <StockMarketItem stock={stock} index={index}/>
    });

    return (
        <>
            <h3>StockMarketList</h3>
            {stockItems}
        </>
    );
};

export default StockMarketList;