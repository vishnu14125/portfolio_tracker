import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {apikey} from '../../services/apikey';
import {fetchedStockPrices} from '../stockMarketComponents/fetchedData';


const ChartHoldingPriceHistory = ({holdingData}) => {
    
    const searchedStockSymbol = holdingData.symbol;
    console.log(searchedStockSymbol)

        // const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${searchedStockSymbol}?timeseries=65&apikey=${apikey}`
        // 
        
        // Below block fetches and assigns api historic data to historicalData, an array of objects

        // historicalData = fetch(url)
        //                  .then(data => data.json())
        //                  .then(data => data.historical)
    
    const historicalData = fetchedStockPrices // Comment out and comment in above to switch to fetched data
    console.log(historicalData)
    
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
                data: datePrice
            }
        ]
    }

    return (
        <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
    )
}

export default ChartHoldingPriceHistory;