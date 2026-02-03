
Promise.all = function (pass) {
    let result = []
    let count = 0;

    return new Promise((resolve, rej) => {
        pass.forEach((element, index) => {
            Promise.resolve(element)
                .then(value => {
                    result[index] = value
                    count++;
                })
            if (count == pass.length)
                resolve(result)
        }).catch(err => {
            rej(err)
        })
    })

}

let p1 = new Promise((resolve, rej) => { });
let p2 = new Promise((resolve, rej) => { })
let p3 = new Promise((resolve, rej) => { })

let pass = [p1, p2, p3]