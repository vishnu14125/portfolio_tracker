import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const ChartPriceHistory = ({historicalPrices}) => {
    
    // console.log(historicalPrices)

    const dates = historicalPrices.map(day => day.date).reverse()
    // console.log(dates)

    const prices = historicalPrices.map(day => day.adjClose).reverse()
    // console.log(prices)

    const options = {
        chart: {
            borderWidth: 1
        },
        title: {
            text: "Previous 30 days' close prices"
        },
        xAxis: {
            categories: dates,
            // labels: {
            //     format: ''
            // }
        },
        rangeSelector: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series:[
            {
                data: prices
            }
        ]
    }

    return (
        <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
    )
}

export default ChartPriceHistory;