import React, {useEffect, useState} from 'react';
// import {apikey} from '../../services/apikey';
// import {fetchedStockDetails, fetchedStockPrices} from './fetchedData.js';
import {Accordion, Button, Card, Row, Col} from "react-bootstrap";
import ChartPriceHistory from '../sharedComponents/ChartPriceHistory';

const StockItemDetails = ({symbol, handleHistPrices, historicalPrices, addToFavourites, stockPrices, stockDetails}) => {

    const handleAddToFavourites = () => {
        const favourite = stockDetails
        favourite.currentSharePrice = (stockPrices[0].open + stockPrices[0].change).toFixed(2)
         
        {stockPrices[0].change >= 0 ?
            favourite.currentDayChange =
            <li style={{color:'#00b300'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▲ </li> :
            favourite.currentDayChange =
            <li style={{color:'red'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▼ </li>
        };

        {(stockPrices[0].close - stockPrices[62].close) >= 0 ?
            favourite.change3Months =
            <li style={{color:'#00b300'}}><b>Change since 3 months ago: </b> $ {(stockPrices[0].close - stockPrices[62].close).toFixed(2)} ({((stockPrices[0].close - stockPrices[62].close) *100 / stockPrices[62].close).toFixed(2)} %) ▲ </li> :
            favourite.change3Months =
            <li style={{color:'red'}}><b>Change since 3 months ago: </b> $ {(stockPrices[0].close - stockPrices[62].close).toFixed(2)} ({((stockPrices[0].close - stockPrices[62].close) *100 / stockPrices[62].close).toFixed(2)} %) ▼ </li>
        };
        console.log("Before sending", favourite);
        addToFavourites(favourite)
    };

    // let histPriceResultChange = (stockPrices[0].close - stockPrices[62].close)
    // let resultPercentage = (histPriceResultChange *100 / stockPrices[62].close)

    return (
        <> 
        {stockDetails && stockPrices ? 
        <div>
        <Card border="primary" style={{width:'90%', margin:'auto'}}>
            <Card.Header><h3 style={{textAlign:'center'}}><b>{stockDetails.companyName}</b>
            <Button variant="outline-primary" onClick={handleAddToFavourites} style={{marginLeft:'5%'}}> ➕ </Button></h3>
            </Card.Header>

            <Card.Body>
                <Row>
                    <Col xs={3}>
                    <img src={stockDetails.image} style={{width:'70%', margin:'auto'}}></img>
                    </Col>
                    
                    <Col>
                    <ul style={{listStyle:'none'}}>

                    <li><b>Symbol: </b>{stockDetails.symbol}</li>
                    <li><b>Current share price: </b>$ {(stockPrices[0].open + stockPrices[0].change).toFixed(2)}</li>

                    {stockPrices[0].change >= 0 ?
                        <li style={{color:'#00b300'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▲ </li> :
                        <li style={{color:'red'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▼ </li>
                    }

                    {(stockPrices[0].close - stockPrices[62].close) >= 0 ?
                        <li style={{color:'#00b300'}}><b>Change since 3 months ago: </b> $ {(stockPrices[0].close - stockPrices[62].close).toFixed(2)} ({((stockPrices[0].close - stockPrices[62].close) *100 / stockPrices[62].close).toFixed(2)} %) ▲ </li> :
                        <li style={{color:'red'}}><b>Change since 3 months ago: </b> $ {(stockPrices[0].close - stockPrices[62].close).toFixed(2)} ({((stockPrices[0].close - stockPrices[62].close) *100 / stockPrices[62].close).toFixed(2)} %) ▼ </li>
                    }

                    <li><b>Last dividend: </b>{stockDetails.lastDiv}</li>
                    <li><b>Sector: </b>{stockDetails.sector}</li>
                    <li><b>Industry: </b>{stockDetails.industry}</li>
                    <li><b>Website: </b><a href={stockDetails.website}>{stockDetails.website}</a></li>

                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Description: </b></Accordion.Header>
                        <Accordion.Body style={{height:'200px', overflowY:'scroll'}}>
                        {stockDetails.description}
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

                    <li><b>Ceo: </b>{stockDetails.ceo}</li>
                    <li><b>Country: </b>{stockDetails.country}, <b>Currency: </b>{stockDetails.currency}</li>
                    <li><ChartPriceHistory historicalPrices={stockPrices}/></li>
                    </ul>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        <br></br>

        </div>
        : null}
        </>
    );
};

export default StockItemDetails;