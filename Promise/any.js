
Promise.myAny = function (args) {
    let count = 0;
    let errors = []
    return new Promise((resolve, reject) => {
        if (args.length == 0) {
            reject(new AggregateError([], "all got rejected"))
            return;
        }
        args.forEach((element, index) => {
            Promise.resolve(element).then(item =>
                resolve(item)
            ).catch(err => {
                errors[index] = err
                count++;
                if (count == args.length) {// reject(errors) 
                    reject(new AggregateError(errors, "all got rejected"))
                    return;
                }
            })
        });
    })
}

let p1 = new Promise((resolve) => {
    setTimeout(() => { resolve("p01") }, 5000)
})
let p2 = new Promise((resolve) => {
    setTimeout(() => { resolve("p02") }, 3000)
})
let p3 = new Promise((resolve) => {
    setTimeout(() => { resolve("p30") }, 2000)
})
let p4 = new Promise((reject) => {
    setTimeout(() => { reject("rejected") }, 1000)
})

Promise.myAny([p1, p2, p3]).then(console.log)
Promise.myAny([p4, p4, p4]).then(console.log).catch(console.error)


