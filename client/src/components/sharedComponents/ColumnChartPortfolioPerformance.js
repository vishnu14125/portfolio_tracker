import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ImPriceTag } from 'react-icons/im';

const ColumnChartPortfolioPerformance = ({ portfolioData }) => {

    const holdingsSymbols = ['Portfolio Total', ...portfolioData.map(holding => holding.symbol)];
    
    let holdingsTotalPaid = portfolioData.map(holding => {
        return (Number((holding.avgPurchasePrice * holding.numberOfShares).toFixed(2)))      
    })
    
    const portfolioTotalPaid = Number(holdingsTotalPaid.reduce((previous, current) => {
        return (previous + current)
    }, 0).toFixed(2))
        
    let holdingsTotalValue = portfolioData.map(holding => {
        return (Number((holding.currentPrice * holding.numberOfShares).toFixed(2)))
    })
    
    const portfolioTotalValue = Number(holdingsTotalValue.reduce((previous, current) => {
        return (previous + current)
    }, 0).toFixed(2))
    
    holdingsTotalPaid = [portfolioTotalPaid, ...holdingsTotalPaid]
    holdingsTotalValue = [portfolioTotalValue, ...holdingsTotalValue]
    // console.log(holdingsTotalPaid)
    // console.log(holdingsTotalValue)

    let holdingsPL = portfolioData.map(holding => {
        return (
            (holding.currentPrice * holding.numberOfShares) - (holding.avgPurchasePrice * holding.numberOfShares).toFixed(2)
        )
    })

    const portfolioTotalPL = Number((portfolioTotalValue - portfolioTotalPaid).toFixed(2))

    holdingsPL = [portfolioTotalPL, ...holdingsPL]
    
    const options = {
        chart: {
            plotBackgroundColor: 'white',
            plotBorderWidth: null,
            plotShadow: false,
            type: 'column'
        },
        title: {
            text: 'Current Portfolio performance snapshot'
        },
        tooltip: {
            pointFormat: '{point.series.name}: <b>$ {point.y: .2f}</b>'
        },
        xAxis: {
            categories: holdingsSymbols           
        },
        credits: {
            enabled: false
        },
        series: [{
                name: 'Total Paid Price',
                data: holdingsTotalPaid
            },
            {
                name: 'Total Value',
                data: holdingsTotalValue
            },
            {
                name: 'Profit/Loss',
                data: holdingsPL
            },
        ]
    }

    return (
        <HighchartsReact highcharts={Highcharts} options={options} />

    )

}

export default ColumnChartPortfolioPerformance;