const isTradeable = stockObj => {
    return stockObj.tradeable && stockObj.tradability === 'tradable' && stockObj.state === 'active';
};

const filterByTradeable = stocks => {
    const allStocks = require('../json/stock-data/allStocks');
    const areTradeable = [];
    for (let ticker of stocks) {
        const foundObj = allStocks.find(obj => obj.symbol === ticker);
        if (foundObj && isTradeable(foundObj)) {
            areTradeable.push(ticker);
        }
    }
    return areTradeable;
};

module.exports = {
    isTradeable,
    filterByTradeable
};
