import { deleteShares } from "../../services/PortfolioServices";

const PortfolioSharesItem = ({heldShare, removeHeldSharesInCompany}) => {
    


    const handleDelete = () => {
        deleteShares(heldShare_id) //Delete from DB
        .then(() => {
            removeHeldSharesInCompany(heldShare.id) //Update State
        })
    }
    
    
    
    return (  

        <>
            <td>
                <tr>
                    {heldShare.symbol}
                </tr>
                <tr>
                    {heldShare.name}
                </tr>
                <tr>
                    {heldShare.numberOfStocks}
                </tr>
                <tr>
                    {heldShare.avgPurchasePrice}
                </tr>
                <tr>
                    CurrentSharePrice
                </tr>
                <tr>
                    {heldShare.numberOfStocks}*{heldShare.avgPurchasePrice}
                </tr>
                <tr>
                    Current Value of All Shares
                </tr>
                <tr>
                    P/L £ / %
                </tr>
                <tr>Edit....</tr>
                <tr>
                    <button onClick={handleDelete}>🗑</button>  
                </tr>
            </td>
        </>


    );
}
 
export default PortfolioSharesItem;