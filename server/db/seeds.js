use portfolio;
db.dropDatabase();

const closeArr = [['2021-01-05', 200.15], ['2021-01-06', 202.15], ['2021-01-07', 225.50], ['2021-01-08', 260.50]]

db.shares.insertMany([
    
    {
        name: "Tesla Inc",
        symbol: "TSLA",
        purchaseDate: "25/11/2021",
        numberOfShares: 2,
        avgPurchasePrice: 1031.56,
        closePrices: closeArr
    },
    {
        name: "Amazon.com Inc",
        symbol: "AMZN",
        purchaseDate: "01/02/2021",
        numberOfShares: 5,
        avgPurchasePrice: 3224.28,
        closePrices: closeArr
    },
    {
        name: "NVIDIA Corporation",
        symbol: "NVDA",
        purchaseDate: "31/03/2021",
        numberOfShares: 2,
        avgPurchasePrice: 261.22,
        closePrices: closeArr
    },
    {
        name: "General Electric Company",
        symbol: "GE",
        purchaseDate: "05/01/2022",
        numberOfShares: 10,
        avgPurchasePrice: 250.63,
        closePrices: closeArr
    },
    {
        name: "Uber Technologies, Inc",
        symbol: "UBER",
        purchaseDate: "05/01/2022",
        numberOfShares: 123,
        avgPurchasePrice: 23.56,
        closePrices: closeArr
    },
    {
        name: "Moderna, Inc",
        symbol: "MRNA",
        purchaseDate: "05/01/2022",
        numberOfShares: 1,
        avgPurchasePrice: 400.67,
        closePrices: closeArr
    },
    {
        name: "Ford Motor Company",
        symbol: "F",
        purchaseDate: "05/01/2022",
        numberOfShares: 4,
        avgPurchasePrice: 29.32,
        closePrices: closeArr
    }
])