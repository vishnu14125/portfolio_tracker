use portfolio;
db.dropDatabase();

db.stocks.insertMany([
    {
        name: "Tesla Inc",
        symbol: "TSLA",
        purchaseDate: "25/11/2021",
        numberOfStocks: 2,
        avgPurchasePrice: 1031.56
    }
    {
        name: "Amazon.com Inc",
        symbol: "AMZN",
        purchaseDate: "01/02/2021",
        numberOfStocks: 5,
        avgPurchasePrice: 3224.28
    }
    {
        name: "BP plc",
        symbol: "BP",
        purchaseDate: "31/03/2021",
        numberOfStocks: 2,
        avgPurchasePrice: 389.95
    }
    {
        name: "Lloyds Banking Group PLC",
        symbol: "LLOY",
        purchaseDate: "26/08/2021",
        numberOfStocks: 10,
        avgPurchasePrice: 54.55
    }
])