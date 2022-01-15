

const PortfolioSharesList = ({heldShares, removeHeldSharesInCompany}) => {

    const portfolioSharesItems = heldShares.map((heldShare, index) => {
        return <PortfolioSharesItem heldShare={heldShare} key={index} addNewShares={addNewShares} />
    })



    return ( 

        <>
            <table>
                {portfolioSharesItems}
            </table>
        </>

     );
}
 
export default PortfolioSharesList;


