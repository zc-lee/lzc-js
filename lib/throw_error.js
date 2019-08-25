const echo = require('lzc-echo')
module.exports = function (err = 'unknow Error') {
    echo.error('× '+err)
    throw Error(err)
}