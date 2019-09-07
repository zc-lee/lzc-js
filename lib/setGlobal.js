const l_typeof = require('./typeof')
const echo = require('lzc-echo')

const format = {
    Array(list) {
        let arr=[]
        list.forEach(v=>{
            arr.push([v,v])
        })
        return arr
    },
    Object(list) {
        return Object.entries(list)
    }
}

module.exports = function (list = [], prePath = '', preKey = '') {
    let type = l_typeof(list)
    if (!Reflect.has(format, type))
        return echo.error(`× list type must be ${Object.keys(format)}!!!`)
    format[type](list, prePath, preKey).forEach(([key, val]) => {
        // echo.succ(key,':',val)
        key = preKey + key
        if (Reflect.has(global, key))
            return echo.error(`× ${key} is exist in global!!!`)
        global[key] = require(prePath + val)
        // echo.succ(`√ global add ${key} success!!!`)
    })
}