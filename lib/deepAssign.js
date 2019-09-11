const l_typeof = require('./typeof')
function deepAssign() {
    let argus = Object.values(arguments),
        obj = argus.shift()
    argus.forEach(v => {
        for (let [key, val] of Object.entries(v)) {
            l_typeof(obj[key]) == 'Object' && l_typeof(val) == 'Object' ?
                obj[key] = deepAssign(obj[key], val) :
                obj[key] = val
        }
    });
    return obj
}
Object.prototype.deepAssign = deepAssign
module.exports = function () {
    return deepAssign(...Object.values(arguments))
}