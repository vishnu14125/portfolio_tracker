import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {apikeyPH} from '../../services/apikey';
import {useEffect, useState} from 'react';
import { fetchedStockPrices } from '../stockMarketComponents/fetchedData';


const ChartHoldingPriceHistory = ({holdingData}) => {
    
    const [historicalData, setHistoricalData] = useState([])
    
    const searchedStockSymbol = holdingData.symbol;

    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${searchedStockSymbol}?timeseries=65&apikey=${apikeyPH}`

        
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setHistoricalData(res.historical))
        // setHistoricalData(fetchedStockPrices) // Comment out and comment in above to switch to fetched data
    }, [url]) 
    
    // const purchased = 1635206400000;  //Date.parse(holdingData.purchaseDate)
    // console.log(purchased)

    const datePrice = historicalData.map((day) => {
            return ([
                Date.parse(day.date),
                day.adjClose
            ])
        })
        .reverse() 
    // console.log(datePrice)   
    
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
                data: datePrice,
                type: 'area',
                threshold: null,
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                }
            },
        ]
    }

    return (
        <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
    )
}

export default ChartHoldingPriceHistory;