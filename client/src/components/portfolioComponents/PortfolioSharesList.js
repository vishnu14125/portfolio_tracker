import PortfolioSharesItem from "./PortfolioSharesItem";

const PortfolioSharesList = ({heldShares, removeHeldSharesInCompany}) => {

    const portfolioSharesItems = heldShares.map((heldShare, index) => {
        return <PortfolioSharesItem heldShare={heldShare} key={index} removeHeldSharesInCompany={removeHeldSharesInCompany} />
    })



    return ( 

        <>
            <table>
            <tr>
                <th>
                    Symbol
                </th>
                <th>
                    Company Name
                </th>
                <th>
                   Shares Held 
                </th>
                <th>
                    Avg. Purchase Price
                </th>
                <th>
                    Current Share Price
                </th>
                <th>
                    Total Purchase Price
                </th>
                <th>
                    Current Total Value
                </th>
                <th>
                    P/L
                </th>
                <th>
                  Edit  
                </th>
                <th>
                    Delete
                </th>
            </tr>
                {portfolioSharesItems}
            </table>
        </>

     );
}
 
export default PortfolioSharesList;


