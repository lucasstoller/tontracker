const basic = require('./basic')
const servers = require('./servers')
const paths = require('./paths')

module.exports = {
    ...basic,
    ...servers,
    ...paths
};