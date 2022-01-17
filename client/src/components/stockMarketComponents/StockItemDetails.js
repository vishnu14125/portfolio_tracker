import React, {useEffect, useState} from 'react';
// import {getStockItemDetails} from '../../services/ApiServices';
import {apikey} from '../../services/apikey';
import {fetchedStockDetails, fetchedStockPrices} from './fetchedData.js';
import {Accordion, Card, Row, Col} from "react-bootstrap";

const StockItemDetails = ({symbol}) => {

    const [stockDetails, setStockDetails] = useState(fetchedStockDetails);
    const [stockPrices, setStockPrices] = useState(fetchedStockPrices);

    // const [stockDetails, setStockDetails] = useState(null);
    // const [stockPrices, setStockPrices] = useState(null);

    useEffect(() => {
        // const url1 = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apikey}`
        // fetch(url1)
        // .then(data => data.json())
        // // data[0] - is an object
        // .then(data => setStockDetails(data[0]))

        // const url2 = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?timeseries=2&apikey=${apikey}`
        // fetch(url2)
        // .then(data => data.json())
        // // data.historical - an array of 2 objects
        // .then(data => setStockPrices(data.historical))
    },[symbol]);


    return (
        <> 
        {stockDetails && stockPrices ? 
        <div>
        <br></br>

        <Card border="primary" style={{width:'90%', margin:'auto'}}>
            <Card.Header style={{textAlign:'center'}}><h3><b>{stockDetails.companyName}</b></h3></Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={3}>
                    <img src={stockDetails.image} style={{width:'70%', margin:'auto'}}></img>
                    </Col>
                    <Col>
                    <tr><b>Symbol: </b>{stockDetails.symbol}</tr>

                    <tr><b>Current share price: </b>$ {stockPrices[0].open + stockPrices[0].change}</tr>

                    {stockPrices[0].open + stockPrices[0].change >= stockPrices[0].open ?
                        <tr style={{color:'#00b300'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▲</tr> :
                        <tr style={{color:'red'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▼ </tr>}
                    
                    <tr><b>Last dividend: </b>{stockDetails.lastDiv}</tr>
                    <tr><b>Sector: </b>{stockDetails.sector}</tr>
                    <tr><b>Industry: </b>{stockDetails.industry}</tr>
                    <tr><b>Website: </b><a href={stockDetails.website}>{stockDetails.website}</a></tr>

                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header style={{ height: '2%' }}><b>Description: </b></Accordion.Header>
                        <Accordion.Body>
                        {stockDetails.description}
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

                    <tr><b>Ceo: </b>{stockDetails.ceo}</tr>
                    <tr><b>Country: </b>{stockDetails.country}</tr>
                    <tr><b>Currency: </b>{stockDetails.currency}</tr>
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