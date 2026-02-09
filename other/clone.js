
function deepClone(args) {
    if ( args == null || typeof args != 'object') {
        return args;
    }
    //for array[if current item is array ]
    if (Array.isArray(args)) {
        return args.map(deepClone)
    }

    //if current is object
    const obj = {}
    for (const key in args) {
        obj[key] = deepClone(args[key])
    }

    return obj
}

let a = [23, 2, 4, 55, 6,]
let c=deepClone(a);
c[0]=34;
console.log(a)
console.log(c)
// let d = deepClone(a)
// d[0] = 34
// console.log(a)
// console.log(d)
// x=null
// let c=deepClone(x)
// console.log(c)
// y={}
// let d=deepClone(y)
// console.log(y)