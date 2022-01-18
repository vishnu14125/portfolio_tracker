import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const ChartHoldingPriceHistory = ({holdingPriceData}) => {
    
    console.log(holdingPriceData)

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
                data: holdingPriceData
            }
        ]
    }

    return (
        <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
    )
}

export default ChartHoldingPriceHistory;