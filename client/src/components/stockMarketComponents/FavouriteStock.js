import React from 'react';
import {Accordion, Button, Card, Row, Col} from "react-bootstrap";

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
                        <Accordion.Header style={{ height: '2%' }}><b>Description: </b></Accordion.Header>
                        <Accordion.Body>
                        {favourite.description}
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

                    <li><b>Ceo: </b>{favourite.ceo}</li>
                    <li><b>Country: </b>{favourite.country}</li>
                    <li><b>Currency: </b>{favourite.currency}</li>
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