import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const ChartPriceHistory = ({closePriceData}) => {
    
    // console.log(historicalPrices)

    // const dates = historicalPrices.map(day => Date.parse(day.date)).reverse()
    // console.log(dates)

    // const prices = historicalPrices.map(day => day.adjClose).reverse()
    // console.log(prices)

    const datePrice = closePriceData.map((day) => {
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
            }
        ]
    }

    return (
        <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
    )
}

export default ChartPriceHistory;