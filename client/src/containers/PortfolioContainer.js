import React, { useEffect, useState } from "react";
import { deleteShares, getHeldShares, postNewShareAdd } from "../services/PortfolioServices";
import PortfolioSharesList from "../components/portfolioComponents/PortfolioSharesTable";

const PortfolioContainer = () => {

    const [heldShares, setHeldShares] = useState([]);



    useEffect(() => {
        getHeldShares()
        .then(shares => setHeldShares(shares))
    }, [])


    //REMOVE ALL SHARES IN A PARTICULAR COMPANY
    const removeHeldSharesInCompany = (id) => {
        deleteShares(id) //Delete from DB
        .then( ()=> {
            setHeldShares(heldShares.filter(shares => shares._id !== id))
        }) //Update State
    }

    //ADD A SHARE IN A STOCK WE DO NOT HAVE IN OUR PORTFOLIO
    const addNewShares = (newShares) => {
        postNewShareAdd(newShares)
        .then(savedNewShares => setHeldShares([...heldShares, savedNewShares]))
    }




    return (  

        <>
            <p>Portfolio Container</p>
            <PortfolioSharesList heldShares={heldShares} removeHeldSharesInCompany={removeHeldSharesInCompany} />
        </>

    );
}
 
export default PortfolioContainer;