import React, { useEffect, useState } from "react";
import { getHeldShares, postNewShareAdd } from "../services/PortfolioServices";


const PortfolioContainer = () => {

    const [heldShares, setHeldShares] = useState([]);



    useEffect(() => {
        getHeldShares()
        .then(shares => setHeldShares(shares))
    }, [])

    //ADD A SHARE IN A STOCK WE DO NOT HAVE IN OUR PORTFOLIO
    const addNewShares = (newShares) => {
        postNewShareAdd(newShares)
        .then(savedNewShares => setHeldShares([...heldShares, savedNewShares]))
    }




    return (  

        <>
            <p>Portfolio Container</p>
        </>

    );
}
 
export default PortfolioContainer;