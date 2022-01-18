import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const ChartHoldingPriceHistory = ({holdingPriceData}) => {
    
    const datePrice = holdingPriceData.map((day) => {
        return ([
            Date.parse(day[0]),
            day[1]
        ])
    })
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