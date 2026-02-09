//Promise.race

Promise.myRace = function (args) { 
    return new Promise((resolve, reject) => {
        args.forEach((element, index) => {
            Promise.resolve(element).then((item) => {
               resolve(item)
            }).catch(err => reject(err))
        });
    })
}

let p1 = new Promise((resolve, rej) => {
    setTimeout(() => { resolve("p1") }, 5000)
})
let p2 = new Promise((resolve, rej) => {
    setTimeout(() => { resolve("p2") }, 3000)
})
let p3 = new Promise((resolve, rej) => {
    setTimeout(() => { resolve("p3") }, 2000)
})
// Promise.race([p1,p2,p3]).then(console.log)
// Promise.myRace([p1, p2, p3]).then(console.log)
Promise.myRace([]).then(console.log)