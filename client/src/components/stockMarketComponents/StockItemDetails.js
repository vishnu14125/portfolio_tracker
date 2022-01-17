import React, {useEffect, useState} from 'react';
// import {getStockItemDetails} from '../../services/ApiServices';
import {apikey} from '../../services/apikey';
import {fetchedStockDetails, fetchedStockPrices} from './fetchedData.js';
import {Accordion, Card, Row, Col} from "react-bootstrap";

const StockItemDetails = ({symbol, handleHistPrices}) => {

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

        // const url2 = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?timeseries=23&apikey=${apikey}`
        // fetch(url2)
        // .then(data => data.json())
        // // data.historical - an array of 2 objects
        // .then(data => setStockPrices(data.historical))
        // .then(data => {
            historic30dayPrice(stockPrices)
        // })
    },[symbol]);


    const historic30dayPrice = (stockClosePrices) => {
        const hist30dayPrices = []
        const result = stockClosePrices.map((stockPrice) => {
            hist30dayPrices.push(stockPrice.close)
        });
        console.log("hist30dayPrices", hist30dayPrices);
        handleHistPrices({
            symbol: symbol,
            prices: hist30dayPrices
        });
    };

    let histPriceResultChange = (stockPrices[0].close - stockPrices[19].close)
    let resultPercentage = (histPriceResultChange *100 / stockPrices[19].close)

    return (
        <> 
        {stockDetails && stockPrices ? 
        <div>
        <Card border="primary" style={{width:'90%', margin:'auto'}}>
            <Card.Header style={{textAlign:'center'}}><h3><b>{stockDetails.companyName}</b></h3></Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={3}>
                    <img src={stockDetails.image} style={{width:'70%', margin:'auto'}}></img>
                    </Col>
                    
                    <Col>
                    <ul style={{listStyle:'none'}}>

                    <li><b>Symbol: </b>{stockDetails.symbol}</li>
                    <li><b>Current share price: </b>$ {stockPrices[0].open + stockPrices[0].change}</li>

                    {/* {stockPrices[0].open + stockPrices[0].change >= stockPrices[0].open ?
                        <li style={{color:'#00b300'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▲ </li> :
                        <li style={{color:'red'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▼ </li>
                    } */}


                    {stockPrices[0].change >= 0 ?
                        <li style={{color:'#00b300'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▲ </li> :
                        <li style={{color:'red'}}><b>Current day change: </b> $ {stockPrices[0].change} ({(stockPrices[0].change *100 /stockPrices[0].open).toFixed(2)} %) ▼ </li>
                    }

                    {histPriceResultChange >= 0 ?
                        <li style={{color:'#00b300'}}><b>Price change since 30 days ago: </b> $ {histPriceResultChange.toFixed(2)} ({resultPercentage.toFixed(2)} %) ▲ </li> :
                        <li style={{color:'red'}}><b>Price change since 30 days ago: </b> $ {histPriceResultChange.toFixed(2)} ({resultPercentage.toFixed(2)} %) ▼ </li>
                    }

                    <li><b>Last dividend: </b>{stockDetails.lastDiv}</li>
                    <li><b>Sector: </b>{stockDetails.sector}</li>
                    <li><b>Industry: </b>{stockDetails.industry}</li>
                    <li><b>Website: </b><a href={stockDetails.website}>{stockDetails.website}</a></li>

                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header style={{ height: '2%' }}><b>Description: </b></Accordion.Header>
                        <Accordion.Body>
                        {stockDetails.description}
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

                    <li><b>Ceo: </b>{stockDetails.ceo}</li>
                    <li><b>Country: </b>{stockDetails.country}</li>
                    <li><b>Currency: </b>{stockDetails.currency}</li>
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