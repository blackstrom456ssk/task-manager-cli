const config = require('./config.json');

async function checkEligibility(address) {
    if(config.mock) {
        return Math.random() > 0.5;
    }
    return false;
}

module.exports = { checkEligibility };
