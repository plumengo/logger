const colors = require('colors')

function logger(...optionalParams) {
    let ts = new Date(Date.now()).toISOString()
    console.log(ts.gray.bold, ...optionalParams)
}

module.exports = logger
