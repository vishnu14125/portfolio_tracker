import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { deleteShares } from "../../services/PortfolioServices";

const PortfolioSharesItem = ({heldShare, removeHeldSharesInCompany}) => {
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    

    const handleDelete = () => {
        deleteShares(heldShare._id) //Delete from DB
        .then(() => {
            removeHeldSharesInCompany(heldShare._id) //Update State
        })
        handleClose()
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
                    {heldShare.numberOfShares}
                </td>
                <td>
                    {heldShare.avgPurchasePrice}
                </td>
                <td>
                    {heldShare.currentPrice}
                </td>
                <td>
                    { (heldShare.numberOfShares * heldShare.avgPurchasePrice).toFixed(2) }
                </td>
                <td>
                    { (heldShare.numberOfShares * heldShare.currentPrice).toFixed(2) }
                </td>
                <td>
                    P/L £ / %
                </td>
                <td>Edit....</td>
                <td>
                <Button variant="danger" onClick={handleShow}>
                <i className="bi bi-trash-fill"> Delete</i>
                </Button>
                <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>

                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete your entire holding in {heldShare.name} ({heldShare.symbol})?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} variant="danger">
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

                </td>
            </tr>


            

        </>
        

    );
}
 
export default PortfolioSharesItem;