import React from 'react';
import {Accordion, Button, Card, Row, Col} from "react-bootstrap";
import ChartPriceHistory from '../sharedComponents/ChartPriceHistory';

const FavouriteStock = ({favourite}) => {

    return (
        <div>
        <Card border="primary" style={{width:'90%', margin:'auto'}}>
            <Card.Header><h3 style={{textAlign:'center'}}><b>{favourite.companyName}</b></h3>
            
            </Card.Header>

            <Card.Body>
                <Row>
                    <Col xs={3}>
                    <img src={favourite.image} style={{width:'70%', margin:'auto'}}></img>
                    </Col>
                    
                    <Col>
                    <ul style={{listStyle:'none'}}>

                    <li><b>Symbol: </b>{favourite.symbol}</li>
                    <li><b>Current share price: </b>$ {favourite.currentSharePrice}</li>

                    {favourite.currentDayChange ? favourite.currentDayChange : null}

                    {favourite.change3Months ? favourite.change3Months : null}

                    <li><b>Last dividend: </b>{favourite.lastDiv}</li>
                    <li><b>Sector: </b>{favourite.sector}</li>
                    <li><b>Industry: </b>{favourite.industry}</li>
                    <li><b>Website: </b><a href={favourite.website}>{favourite.website}</a></li>

                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Description: </b></Accordion.Header>
                        <Accordion.Body style={{height:'200px', overflowY:'scroll'}}>
                        {favourite.description}
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

                    <li><b>Ceo: </b>{favourite.ceo}</li>
                    <li><b>Country: </b>{favourite.country}, <b>Currency: </b>{favourite.currency}</li>
                    {/* <li><ChartPriceHistory historicalPrices={favourite}/></li> */}
                    </ul>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        <br></br>

        </div>
    )
};

export default FavouriteStock;