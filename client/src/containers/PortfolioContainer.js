
import React, { useEffect, useState } from "react";
import { deleteShares, getHeldShares, postNewShareAdd } from "../services/PortfolioServices";
import PortfolioSharesList from "../components/portfolioComponents/PortfolioSharesList";
import ChartHoldingsByCompany from "../components/sharedComponents/ChartHoldingsByCompany";
import ColumnChartPortfolioPerformance from "../components/sharedComponents/ColumnChartPortfolioPerformance";

const PortfolioContainer = ({apiData}) => {

    const [heldShares, setHeldShares] = useState([]);
    const [sharesWithPrice, setSharesWithPrice] = useState([]);
    const [portfolioTotals, setPortfolioTotals] = useState({})

    useEffect(() => {
        getHeldShares()
        .then(shares => setHeldShares(shares))
    }, [])

    useEffect(() => {
        const portfolioCurrentPrices =
            heldShares.map((company) => {
            return (
                {
                ...company,
                currentPrice: apiData.filter(stock => stock.symbol === company.symbol)
                                .map((stock) => {
                                        return stock.price
                                    })[0]
                }
            )
            })        
        setSharesWithPrice(portfolioCurrentPrices)
    }, [heldShares, apiData])

    useEffect(() => {
        const portfolioTotalPaid = Number(
            sharesWithPrice
            .map(holding => holding.avgPurchasePrice * holding.numberOfShares)
            .reduce((previous, current) => {return (previous + current)}, 0)
            .toFixed(2)
        )

        const portfolioTotalValue = Number(
            sharesWithPrice
            .map(holding => holding.currentPrice * holding.numberOfShares)
            .reduce((previous, current) => {return (previous + current)}, 0)
            .toFixed(2)
        )
        
        const newPortfolioTotals = {
            paid: portfolioTotalPaid,
            value: portfolioTotalValue
        }
        setPortfolioTotals(newPortfolioTotals)        
    }, [sharesWithPrice])

    //REMOVE ALL SHARES IN A PARTICULAR COMPANY
    const removeHeldSharesInCompany = (id) => {
        const temp = heldShares.map(shares => shares);
        const indexToDelete = temp.map(shares => shares._id).indexOf(id);
        temp.splice(indexToDelete, 1);
        setHeldShares(temp);
    }

    //ADD A SHARE IN A STOCK WE DO NOT HAVE IN OUR PORTFOLIO
    const addNewShares = (newShares) => {
        postNewShareAdd(newShares)
        .then(savedNewShares => setHeldShares([...heldShares, savedNewShares]))
    }

    return (  

        <>
        <hr/>
            <PortfolioSharesList heldShares={sharesWithPrice} removeHeldSharesInCompany={removeHeldSharesInCompany} />
            <ChartHoldingsByCompany sharesData={sharesWithPrice} />
            <ColumnChartPortfolioPerformance portfolioData={sharesWithPrice} portfolioTotals={portfolioTotals}/>
        </>

    );
}
 
export default PortfolioContainer;
