
function memo(fn, limit = 3) {

    let cache = new Map()

    return function (...arg) {
        const key=JSON.stringify(arg)
        console.log("cache now:", [...cache.keys()]);

        if (cache.has(key)) {
            const value = cache.get(key)
            cache.delete(key);
            cache.set(key, value)
            // console.log("cache now:", [...cache.keys()]);
            return value
        }
        let result = fn(...arg);
        if (cache.size >= limit) {
            const getOlder = cache.keys().next().value;
            cache.delete(getOlder)
        }
        cache.set(key, result)
        // console.log("cache now:", [...cache.keys()]);
        return result
    }
}


function cube(n) {
    return n * n * n;
}
function add(a,b){
    return a+b;
}

const abc=memo(add)
console.log(abc(1,2))
console.log(abc(1,2))
console.log(abc(1,2))
console.log(abc(1,2))
console.log(abc(1,2))
console.log(abc(3,4))

const fn = memo(cube)
console.log(fn(10))
console.log(fn(2))
console.log(fn(2))
console.log(fn(2))
console.log(fn(2))
console.log(fn(2))
console.log(fn(2))
console.log(fn(3)) 
console.log(fn(3)) 
console.log(fn(3)) 
console.log(fn(3)) 
console.log(fn(3)) 
console.log(fn(3)) 
console.log(fn(3)) 