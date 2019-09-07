const fs = require('fs')
const path = require('path')
const setGlobal = require('./lib/setGlobal')

const obj = {
    echo: 'lzc-echo',
    throwError: path.join(__dirname, './lib/throw_error.js'),
    l_push_global: path.join(__dirname, './lib/setGlobal.js')
}
setGlobal(obj)

let list = fs.readdirSync(path.join(__dirname, '/lib')).map(v => path.parse(path.join(__dirname, '/lib', v)).name)
l_push_global(list, path.join(__dirname, '/lib') + '/', 'l_')