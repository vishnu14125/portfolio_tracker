

const PortfolioSharesList = ({heldShares, removeHeldSharesInCompany}) => {

    const portfolioSharesItems = heldShares.map((heldShare, index) => {
        return <PortfolioSharesItem heldShare={heldShare} key={index} addNewShares={addNewShares} />
    })



    return ( 

        <>
            <ul>
                {portfolioSharesItems}
            </ul>
        </>

     );
}
 
export default PortfolioSharesList;


