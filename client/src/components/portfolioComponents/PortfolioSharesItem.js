import { deleteShares } from "../../services/PortfolioServices";

const PortfolioSharesItem = ({heldShare, removeHeldSharesInCompany}) => {
    


    const handleDelete = () => {
        deleteShares(heldShare._id) //Delete from DB
        .then(() => {
            removeHeldSharesInCompany(heldShare.id) //Update State
        })
    }
    
    
    
    return (  

        <>
            <tr>
                <td>
                    {heldShare.symbol}
                </td>
                <td>
                    {heldShare.name}
                </td>
                <td>
                    {heldShare.numberOfStocks}
                </td>
                <td>
                    {heldShare.avgPurchasePrice}
                </td>
                <td>
                    CurrentSharePrice
                </td>
                <td>
                    {heldShare.numberOfStocks}*{heldShare.avgPurchasePrice}
                </td>
                <td>
                    Current Value of All Shares
                </td>
                <td>
                    P/L £ / %
                </td>
                <td>Edit....</td>
                <td>
                    <button onClick={handleDelete}>🗑</button>  
                </td>
            </tr>
        </>


    );
}
 
export default PortfolioSharesItem;