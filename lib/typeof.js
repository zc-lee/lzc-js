module.exports=function (str){
    return Object.prototype.toString.call(str).slice(8, -1)
}