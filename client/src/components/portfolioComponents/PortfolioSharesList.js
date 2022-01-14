

const PortfolioSharesList = () => {

    const heldSharesItems = heldShares.map((heldShare, index) => {
        return <HeldSharesItem />
    })



    return ( 

        <>
            <ul>
                {heldSharesItems}
            </ul>
        </>

     );
}
 
export default PortfolioSharesList;


