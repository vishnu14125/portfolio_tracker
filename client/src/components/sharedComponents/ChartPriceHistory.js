import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const ChartPriceHistory = ({historicalPrices}) => {
    
    // console.log(historicalPrices)

    // const dates = historicalPrices.map(day => Date.parse(day.date)).reverse()
    // console.log(dates)

    // const prices = historicalPrices.map(day => day.adjClose).reverse()
    // console.log(prices)

    const datePrice = historicalPrices.map((day) => {
        return ([
            Date.parse(day.date),
            day.adjClose
        ])
        })
        .reverse()
    

    const options = {
        chart: {
            borderWidth: 1
        },
        title: {
            text: "Previous 3 months' close prices"
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

export default ChartPriceHistory;