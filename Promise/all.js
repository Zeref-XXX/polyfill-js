
Promise.myAll = function (passed) {

    return new Promise((resolve, rej) => {
        if (passed.length === 0) resolve([])
        let result = []
        let count = 0;
        passed.forEach((element, index) => {
            Promise.resolve(element)
                .then(value => {
                    result[index] = value
                    count++;
                    if (count === passed.length)
                        resolve(result)
                }).catch(err => {
                    rej(err)
                })

        })
    })

}

// Promise.myAll(
//     [Promise.resolve(10),
//     Promise.resolve(20),
//     Promise.reject("err")]
// ).catch(console.log)
// Promise.myAll([]).then(console.log)