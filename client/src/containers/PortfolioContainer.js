import React, { useEffect, useState } from "react";


const PortfolioContainer = () => {

    const [heldShares, setHeldShares] = useState([]);


    
    useEffect(() => {
        getHeldShares()
        .then(shares => setHeldShares(shares))
    }, [])





    return (  

        <>
            <p>Portfolio Container</p>
        </>

    );
}
 
export default PortfolioContainer;