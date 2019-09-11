require('./index')

var obj1 = {
    a: 'a1',
    obj: {
        a: 'a1'
    }
}, obj2 = {
    a: 'a2',
    b: 'b2',
    obj: {
        a: 'a2',
        b: 'b2',
    }
}
l_deepAssign(obj1, obj2)
console.log(obj1)
console.log(obj2)