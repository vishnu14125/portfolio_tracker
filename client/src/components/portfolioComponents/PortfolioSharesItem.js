import { Modal, Button, Form } from "react-bootstrap";

import {AiFillFileAdd} from "react-icons/ai"
import {HiDocumentRemove} from "react-icons/hi"
import {BsFillTrashFill} from "react-icons/bs"
import {ImArrowUpRight2} from "react-icons/im"
import {ImArrowDownRight2} from "react-icons/im"
import { useState } from "react";
import { deleteShares } from "../../services/PortfolioServices";


const PortfolioSharesItem = ({heldShare, removeHeldSharesInCompany}) => {
    
    const [showDelete, setShowDelete] = useState(false);
    const [showAddMoreHeldShares, setShowAddMoreHeldShares] = useState(false);
    const [showRemoveSomeHeldShares, setShowRemoveSomeHeldShares] = useState(false);

    const handleShowDelete = () => setShowDelete(true);
    const handleCloseDelete = () => setShowDelete(false);

    const handleShowAddMoreHeldShares = () => setShowAddMoreHeldShares(true);
    const handleCloseAddMoreHeldShares = () => setShowAddMoreHeldShares(false);

    const handleShowRemoveSomeHeldShares = () => setShowRemoveSomeHeldShares(true);
    const handleCloseRemoveSomeHeldShares = () => setShowRemoveSomeHeldShares(false);
    

    const handleDelete = () => {
        deleteShares(heldShare._id) //Delete from DB
        .then(() => {
            removeHeldSharesInCompany(heldShare._id) //Update State
        })
        handleCloseDelete()
    }
   

    const calculateTotal = (number, value) => number * value
    let totalPaidPrice = calculateTotal(heldShare.numberOfShares,heldShare.avgPurchasePrice).toFixed(2)
    let totalValue = calculateTotal(heldShare.numberOfShares, heldShare.currentPrice).toFixed(2)

    const differencePurchaseCurrentValueNum = (purchase, current) => (current - purchase).toFixed(2)
    const differencePurchaseCurrentValuePrc = (purchase, current) => {
        const result = (((current-purchase)/purchase)*100).toFixed(2)
        return result
    }

    let profitOrLossTotal = differencePurchaseCurrentValueNum(totalPaidPrice, totalValue)
    let profitOrLossPrc = differencePurchaseCurrentValuePrc(totalPaidPrice, totalValue)


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
                    {heldShare.numberOfShares}
                </td>
                <td>
                    ${heldShare.avgPurchasePrice}
                </td>
                <td>
                    ${heldShare.currentPrice}
                </td>
                <td>
                    ${totalPaidPrice}
                </td>
                <td>
                    ${totalValue}
                </td>
                <td style={{color: Number(profitOrLossTotal) >= 0 ? "green" : "red"}}>
                 {Number(profitOrLossTotal) >= 0 ? <ImArrowUpRight2 /> : <ImArrowDownRight2 />} ${profitOrLossTotal} ({profitOrLossPrc}%)
                     
                </td>
                <td>
                <Button variant="success" onClick={handleShowAddMoreHeldShares}>
                 <AiFillFileAdd />
                </Button>
                <Button variant="warning" onClick={handleShowRemoveSomeHeldShares}>
                <HiDocumentRemove />
                </Button>
                <Button variant="danger" onClick={handleShowDelete}>
                 <BsFillTrashFill/>
                </Button>
                </td>
                
            </tr>



{/* -----------------------MODALS-------------------- */}
{/* ------------------------DELETE ALL SHARES IN A COMPANY--------------- */}
            <Modal
            show={showDelete}
            onHide={handleCloseDelete}
            backdrop="static"
            keyboard={false}>

                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete your entire holding in {heldShare.name} ({heldShare.symbol})?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} variant="danger">
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>


{/* ----------------------------ADD MORE SHARES IN A HELD STOCK---------------- */}

        <Modal
            show={showAddMoreHeldShares}
            onHide={handleCloseAddMoreHeldShares}
            backdrop="static"
            keyboard={false}>

                <Modal.Header closeButton>
                    <Modal.Title>Add More Shares in {heldShare.symbol}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Number of Shares Purchased</Form.Label>
                        <Form.Control type="number" placeholder="Number of Shares" step="1" min="0" defaultValue="0"/>
                        <Form.Text className="text-muted">
                        Current Number of Shares: {heldShare.numberOfShares}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Price Paid Per Share</Form.Label>
                        <Form.Control type="number"  defaultValue={heldShare.currentPrice} step="0.01" min="0" />
                        <Form.Text className="text-muted">
                        <p>If Price Paid is Different to Current Market Value (Defaulted Value), Please Input the Price Paid.<br></br><br></br>
                        Current Average Price Paid: {heldShare.avgPurchasePrice}</p>
                        </Form.Text>
                    </Form.Group>
                </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddMoreHeldShares}>
                        Cancel
                    </Button>
                    <Button variant="success" type="submit">
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>    



{/* --------------------------------REMOVE SHARES IN A HELD STOCK----------- */}



            <Modal
            show={showRemoveSomeHeldShares}
            onHide={handleCloseRemoveSomeHeldShares}
            backdrop="static"
            keyboard={false}>

                <Modal.Header closeButton>
                    <Modal.Title>Remove Shares in {heldShare.symbol}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Number of Shares to Remove</Form.Label>
                        <Form.Control type="number" placeholder="Number" step="1" min="0" max={heldShare.numberOfShares}  defaultValue="0" />
                        <Form.Text className="text-muted">
                        Fractional Shares Are Not Allowed
                        </Form.Text>
                    </Form.Group>
                </Form>

                    <p>Current Number of Shares: {heldShare.numberOfShares}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseRemoveSomeHeldShares}>
                        Cancel
                    </Button>
                    <Button variant="danger" type="submit">
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>    




        </>
        

    );
}
 
export default PortfolioSharesItem;