const { alpaca } = require('.');

module.exports = async _ => {
    const account = await alpaca.getAccount();
    console.log('Current Account:', account);
    return Number(account.portfolio_value);
}