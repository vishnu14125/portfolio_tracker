
import React, { useEffect, useState } from "react";
import { deleteShares, getHeldShares, postNewShareAdd } from "../services/PortfolioServices";
import PortfolioSharesList from "../components/portfolioComponents/PortfolioSharesList";
import ChartHoldingsByCompany from "../components/sharedComponents/ChartHoldingsByCompany";

const PortfolioContainer = ({apiData}) => {

    const [heldShares, setHeldShares] = useState([]);
    const [sharesWithPrice, setSharesWithPrice] = useState([]);

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


    //REMOVE ALL SHARES IN A PARTICULAR COMPANY
    const removeHeldSharesInCompany = (id) => {
        const temp = heldShares.map(shares => shares);
        const indexToDelete = temp.map(shares => shares._id).indexOf(id);
        temp.splice(indexToDelete, 1);
        setHeldShares(temp);
    }

    //REMOVE SOME SHARES IN A PARTICULAR COMPANY

    const removeSomeSharesInCompany = (id, updatedShareNumber) => {
        const updatedHeldSharesIndex = heldShares.findIndex(heldShare => heldShare._id === id)
        const updatedHeldShares = [...heldShares]
        updatedHeldShares[updatedHeldSharesIndex].numberOfShares = updatedShareNumber
        setHeldShares(updatedHeldShares)
    }

    //ADD A SHARE IN A STOCK WE DO NOT HAVE IN OUR PORTFOLIO
    const addNewShares = (newShares) => {
        postNewShareAdd(newShares)
        .then(savedNewShares => setHeldShares([...heldShares, savedNewShares]))
    }

    //ADD MORE SHARES TO CURRENT HOLDING IN PARTICULAR STOCK

    const addAdditionalShares = (shares) => {
        
    }

    return (  

        <>
        <hr/>
            <PortfolioSharesList heldShares={sharesWithPrice} removeHeldSharesInCompany={removeHeldSharesInCompany} removeSomeSharesInCompany={removeSomeSharesInCompany } />
            <ChartHoldingsByCompany sharesData={sharesWithPrice} />
        </>

    );
}
 
export default PortfolioContainer;
