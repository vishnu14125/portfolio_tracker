import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
// import {apikey} from '../../services/apikey';
import {fetchedStockPrices} from '../stockMarketComponents/fetchedData';
// import React from 'react';
import {useEffect, useState} from 'react';


const ChartHoldingPriceHistory = ({holdingData}) => {
    
    const [historicalData, setHistoricalData] = useState([])
    
    const searchedStockSymbol = holdingData.symbol;
    const apikey = '6e1d003f9be4920d1d0f30b1132132ba'
    console.log(searchedStockSymbol)

        const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${searchedStockSymbol}?timeseries=65&apikey=${apikey}`

        
        useEffect(() => {
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(res => setHistoricalData(res.historical))
                setHistoricalData(fetchedStockPrices) // Comment out and comment in above to switch to fetched data
        }, []) 
    
    
    const datePrice = historicalData.map((day) => {
            return ([
                Date.parse(day.date),
                day.adjClose
            ])
        })
        .reverse()    
    console.log(datePrice)

    const options = {
        chart: {
            borderWidth: 1
        },
        title: {
            text: "Previous close prices"
        },
        tooltip: {
            pointFormat: 'Close price: <b>$ {point.y: .2f}</b>'
        },
        xAxis: {
            type: 'datetime'
        },
        rangeSelector: {
            enabled: true
        },
        credits: {
            enabled: false
        },
        series:[
            {
                data: datePrice
            }
        ]
    }

    return (
        <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
    )
}

export default ChartHoldingPriceHistory;